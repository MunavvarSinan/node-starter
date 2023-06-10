rebuild docker -- docker compose build backend
stop running containers -- docker compose rm -f --stop backend
run prisma migrate inside docker --- docker compose run backend pnpx prisma migrate dev


yarn upgrade-interactive --latest  ( to update the package versions)