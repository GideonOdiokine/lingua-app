#!/bin/bash

START_DATE="2026-06-21"
END_DATE="2026-07-01"

CURRENT_DATE="$START_DATE"

touch contribution-log.txt

while true
do
  COMMITS=$((RANDOM % 4 + 1))

  for ((i=1; i<=COMMITS; i++))
  do
    echo "$CURRENT_DATE commit $i" >> contribution-log.txt

    git add contribution-log.txt

    HOUR=$((RANDOM % 8 + 9))

    GIT_AUTHOR_DATE="$CURRENT_DATE $HOUR:00:00" \
    GIT_COMMITTER_DATE="$CURRENT_DATE $HOUR:00:00" \
    git commit -m "chore: update $CURRENT_DATE ($i)"
  done

  if [ "$CURRENT_DATE" = "$END_DATE" ]; then
    break
  fi

    CURRENT_DATE=$(date -j -v+1d -f "%Y-%m-%d" "$CURRENT_DATE" "+%Y-%m-%d")
done

git push origin main