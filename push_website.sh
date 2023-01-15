# !/bin/sh
eval $(ssh-agent -s);
ssh-add --apple-use-keychain ;
cd $1;
git add .;
git commit -a -m '[$(date)] $(2)';
git push -f;
