# imgop

imgop is a small tool that convert the images on a directory into webp images using the package sharp from node.

## Prerequisites

This works on any **bash** shell with **node** and **npm** installed.

## Install

Clone the repository and run `npm install`.

Edit *imgop.sh* to match your local path:

```
node "/path/to/imgop/src"
```
Confirm that imgop.sh have execution permissions.

Create a global alias for imgop.sh in .bashrc / .zshrc / etc.:

```
alias imgop="/path/to/imgop/imgop.sh"
```

Or register it into your binaries creating a symlink:

```
sudo ln -s "/path/to/imgop/imgop.sh" /usr/local/bin/imgop
```

## How it works

Run `imgop` at the directory with the images, it automatically creatres a new *optimized* directory with the new images.
