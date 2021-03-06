# Board Games

Funky web-app to track board-games played by friends and show on a ranking system. Uses the following technology: 

- Angular
- Bootstrap + Bootstrap Icons
- FastAPI 
- SQLAlchemy 
- Docker

## To do 

- Back-end
    - Error handling for empty database
    - Migrations with alembic
    - Validation that catches a situation where all players have the same rank
- Front-end
    - Editing/viewing games 
    - Error handling in services 
    - Validator for unique players in new game
    - Nicer scaling for mobile 
    - Subscribe scores to service
- Devops 
    - Deploy using Docker Compose: https://docs.docker.com/cloud/ecs-integration/


## How to 

Run locally: 
- Back-end
    - poetry install 
    - poetry run uvicorn app.main:app --reload 
- Frond-end 
    - npm install 
    - ng serve

Deploy on AWS: 

- Launch instance: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html; use Amazon Linux 2 AMI 
- Connect to instance using Putty (OpenSSH doesn't work, probably due to Allseas setup): https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html
- Install requirements: 
    - Install Docker: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html
    - Install Git: `sudo yum install git -y`
- Clone repo from Github
- Manual deployment: 
    - docker build -t back-end .
    - docker build -t front-end . 
    - docker run -d --rm -p 8000:8000 --name api -v db:/src/db back-end 
    - docker run -d --rm -p 80:80 --name web front-end
