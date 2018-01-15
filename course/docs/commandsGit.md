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

 