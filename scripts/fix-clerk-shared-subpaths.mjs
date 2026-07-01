import { access, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();

const sharedPackagePaths = [
  path.join(projectRoot, "node_modules/@clerk/shared/package.json"),
  path.join(projectRoot, "node_modules/@clerk/react/node_modules/@clerk/shared/package.json"),
  path.join(projectRoot, "node_modules/@clerk/expo/node_modules/@clerk/shared/package.json"),
];

const sharedSubpaths = [
  "authorization",
  "browser",
  "clerkEventBus",
  "deprecated",
  "deriveState",
  "error",
  "getEnvVariable",
  "getToken",
  "internal/clerk-js/windowNavigate",
  "keys",
  "loadClerkJsScript",
  "object",
  "proxy",
  "react",
  "telemetry",
  "types",
  "ui",
  "utils",
  "versionCheck",
];

const indexBasedSubpaths = new Set(["react", "types", "ui", "utils"]);

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function isDirectory(targetPath) {
  try {
    const targetStat = await stat(targetPath);
    return targetStat.isDirectory();
  } catch {
    return false;
  }
}

function getDistEntry(subpath) {
  if (indexBasedSubpaths.has(subpath)) {
    return path.join("dist", subpath, "index");
  }

  return path.join("dist", subpath);
}

async function createShim(sharedRoot, subpath) {
  const shimDir = path.join(sharedRoot, subpath);
  const distEntry = getDistEntry(subpath);
  const jsTarget = path.join(sharedRoot, `${distEntry}.js`);
  const mjsTarget = path.join(sharedRoot, `${distEntry}.mjs`);
  const dtsTarget = path.join(sharedRoot, `${distEntry}.d.ts`);
  const dmtsTarget = path.join(sharedRoot, `${distEntry}.d.mts`);

  if (!(await pathExists(jsTarget)) && !(await pathExists(mjsTarget))) {
    return;
  }

  await mkdir(shimDir, { recursive: true });

  const packageJson = {
    main: path.relative(shimDir, jsTarget).replaceAll(path.sep, "/"),
    module: path.relative(shimDir, mjsTarget).replaceAll(path.sep, "/"),
    types: path.relative(shimDir, dtsTarget).replaceAll(path.sep, "/"),
  };

  if (!(await pathExists(mjsTarget))) {
    delete packageJson.module;
  }

  if (!(await pathExists(dtsTarget))) {
    delete packageJson.types;

    if (await pathExists(dmtsTarget)) {
      packageJson.types = path.relative(shimDir, dmtsTarget).replaceAll(path.sep, "/");
    }
  }

  await writeFile(
    path.join(shimDir, "package.json"),
    `${JSON.stringify(packageJson, null, 2)}\n`,
    "utf8"
  );
}

async function fixSharedPackage(sharedPackagePath) {
  if (!(await pathExists(sharedPackagePath))) {
    return;
  }

  const sharedRoot = path.dirname(sharedPackagePath);

  if (!(await isDirectory(path.join(sharedRoot, "dist")))) {
    return;
  }

  await Promise.all(sharedSubpaths.map((subpath) => createShim(sharedRoot, subpath)));
}

async function main() {
  await Promise.all(sharedPackagePaths.map((packagePath) => fixSharedPackage(packagePath)));
}

await main();
