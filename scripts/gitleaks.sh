#!/bin/sh

docker pull zricethezav/gitleaks:latest
docker run --name gitleaks-electrocalc -v $(pwd):/service zricethezav/gitleaks protect --verbose --redact --staged --source=/service
docker rm gitleaks-electrocalc