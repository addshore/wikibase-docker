#!/bin/bash
# This file is provided by the wikibase/wdqs docker image.

# Test if required environment variables have been set
REQUIRED_VARIABLES=(WIKIBASE_HOST WDQS_HOST WDQS_PORT)
for i in ${REQUIRED_VARIABLES[@]}; do
    eval THISSHOULDBESET=\$$i
    if [ -z "$THISSHOULDBESET" ]; then
    echo "$i is required but isn't set. You can pass it using either plain docker or docker-compose";
    exit 1;
    fi
done

set -eu

export BLAZEGRAPH_OPTS="-DwikibaseHost=${WIKIBASE_HOST}"
export UPDATER_OPTS="-DwikibaseHost=${WIKIBASE_HOST}"

envsubst < /templates/mwservices.json > /wdqs/mwservices.json

exec "$@"