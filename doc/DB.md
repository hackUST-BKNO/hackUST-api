## to modify DB
1. SSH to EC2 at ```ssh -i "BKNO-DB1.pem" ubuntu@ec2-54-80-182-191.compute-1.amazonaws.com```
ask me for BKNO-DB1.pem
2. ```sudo -i -u postgres```
3. ```\c bkno```
4. run any SQL command


## to logout 
1. ```\q```
2. ```exit```