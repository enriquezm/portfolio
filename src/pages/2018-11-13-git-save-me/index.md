---
path: "/git-save-me"
date: "2018-11-13"
title: "Git save me"
tags: ['pilot']
excerpt: "Git commands that save me."
---
No matter how good at working with git you think you are, there will be times that you just make a simple mistake. Here are some commands that help me get out of some deep shit.

This list will be growing as I run into obstacles.

### 1. Updating a filename

Ah yes, you update a filename but git just ignores you.

#### TLDR;

    git mv oldName newName

#### Have some time? Here are the details.

Two things:

1. Git will not recognize a filename change unless you have configured it to.
2. Git has a special command used to basically say, "Yo git, this filename has changed."

And that command is:

    git mv oldName newName

You could do the same thing with these 3 commands:

    mv oldname newname
    git add newname
    git rm oldname

But no one has time for that.

#### My scenario

I came across this when I needed to update a component file name (React) form a lowercase to uppercase name.

Essentially, what `git mv oldName newName` does is update your index. I don't necessarily use this all the time, but I figured I'd mention it since it cause me to stop in my tracks for a good amount of time.

Here's some more reading if you want to [learn more about renaming files](https://git-scm.com/docs/git-mv).

### 2. Undo changes (before adding to index)

You've made some updates and realized that you don't want to go through with them anymore. What do you do?

#### TLDR;

Before adding your changes to index (`git add <stuff>`)

Use `git stash`

Git `git drop`

#### Have some time? Here are more details.

I'm not going to go into too much detail, because you can do a lot with this command, but just know that it works like a charm when you made some modifications that you want to put to the side and potentially go back to them later or disregard them all together.

#### My scenario

I'm constantly doing this. Making some changes to some file and then realizing I want to undo those changes and go back to a previous state.

Before taking another step forward, like adding changes to the index with `git add` , I used `git stash`.

Git will then print out a notification along the lines of:

    Saved working directory and index state WIP on master: 1df65f3 Rename.

Essentially, git is saying that it put you back to a state before you made changes, and also stashed those changes you made in case you want to go back to them or not.

Now that you've stashed those changes you didn't want, you can drop them (aka delete them). And you do this with the following command:

    git stash drop

Here's some more reading if you want to [learn more about stashing](https://git-scm.com/docs/git-stash).
