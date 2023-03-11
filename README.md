# imgop

imgop is a small tool that convert the images on a directory into webp images using the package sharp from node.

## Prerequisites

This works on any **bash** shell with **node** installed.

## How it works

Clone the repository.

Edit *imgop.sh* to match your local path:

```
node "$HOME/path/to/imgop"
```
Confirm that imgop.sh have execution permissions.

Create a global alias for imgop.sh in .bashrc / .zshrc / etc.:

```
alias imgop="$HOME/path/to/imgop/imgop.sh"
```

Or register it into your binaries creating a symlink:

```
sudo ln -s "$HOME/path/to/imgop/imgop.sh" /usr/local/bin/imgop
```

Then simply execute it at the directory with the images, it automatically creatres a new *optimized* directory with the new images.
