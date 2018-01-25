# Commands for GitHub

## Initialazing

```git
 git ini
 ```

 ## Checking the Status


```git
 git status
 ```

 ## Adding Changes

```git
 git add name.txt
 ```

## Adding All Changes

```git
 git add "*.txt"
 ```

 ## Committing All Changes

```git
git commit -m 'Add all txt files'
 ```

 ## History

```git
 git log
 ```

 ## Remote Repositories

```git
git remote add origin https:// ... .git
 ```

 ## Pushing Remotely

 The push command tells Git where to put our commits when we're ready, and now we're ready. So let's push our local changes to our origin repo (on GitHub).

```git
git push -u origin master
 ```


 ## Pulling Remotely
 We can check for changes on our GitHub repository 

```git
 git pull origin master
 ```

  ## Differences

  Let's take a look at what is different from our last commit by using the git diff command.

```git
git diff HEAD
 ```

  ## Branching Out

When developers are working on a feature or bug they'll often create a copy (aka. branch) of their code they can make separate commits to.

```git
git branch name_branch
 ```

  ## Switching Branches

```git
git checkout name_branch
 ```

  ## Switching Back to master

```git
git checkout master
 ```

  ## Preparing to Merge

The moment has come when you have to merge your changes from the *name_branch* branch into the master branch

```git
git merge name_branch
 ```

  ## The Push to remota repository

```git
git push
 ```
# Create a new branch 

## Create the branch on your local machine and switch in this branch :
```
$ git checkout -b [name_of_your_new_branch]
```
## Change working branch :
```
$ git checkout [name_of_your_new_branch]
```

## Push the branch on github :
```
$ git push origin [name_of_your_new_branch]
```
## When you want to commit something in your branch, be sure to be in your branch. 

Add -u parameter to set upstream.

You can see all branches created by using :
```
$ git branch
```

### Which will show :

  * approval_messages
    * master
    * master_clea

## Add a new remote for your branch :
```
$ git remote add [name_of_your_remote] 
```

## Push changes from your commit into your branch :
```
$ git push [name_of_your_new_remote] [name_of_your_branch]
```

## Update your branch when the original branch from official repository has been updated :
```
$ git fetch [name_of_your_remote]

$ git fetch upstream
```

## Then you need to apply to merge changes, if your branch is derivated from develop you need to do :

```
$ git merge [name_of_your_remote]/develop
```

## Delete a branch on your local filesystem :
```
$ git branch -d [name_of_your_new_branch]
```
## To force the deletion of local branch on your filesystem :
```
$ git branch -D [name_of_your_new_branch]
```

## Delete the branch on github :

```
$ git push origin :[name_of_your_new_branch]
```


## Information about branch and remote :

```
$ git branch -v
```
```
$ git remote -v
```
 https://help.github.com/articles/fetching-a-remote/
 
git clone https://github.com/mediacloner/skylab-bootcamp-201801
git remote add upstream https://github.com/manuelbarzi/skylab-bootcamp-201801
git fetch upstream
git merge upstream/develop  (posicionado en la rama)
git push



