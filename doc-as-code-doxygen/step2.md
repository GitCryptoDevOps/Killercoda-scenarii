## Basic block

To use Doxygen tags, you have use Java-style comments.

Create the `src/app.java` file:

```
// @package mypackage
/**
 * ... Documentation for this module. ...
 *
 * More details.
 */
void func() {
}
 
/**
 * Documentation for a class.
 *
 * More details.
 */
class MyClass {
   
    // The constructor.
    MyClass() {
    }
   
    // Documentation for a method.
    // @param self The object pointer.
    // @returns Description of returned value.
    void myFunction (int myParam1, String myParam2) {
      long myVar1; ///< a comment after a declaration
      long myVar2; /*!< or like this */
      long myVar3; /**< or like this */
      // ...
    }
     
    // A class variable.
    int classVar = 0;
 
    // @var _memVar
    // a member variable
}
```{{copy}}

Python comments are supported, too:

```
## @package myexample
#  Documentation for this module.
#
#  More details.
 
## Documentation for a function.
#
#  More details.
def func():
    pass
 
## Documentation for a class.
#
#  More details.
class MyClass:
   
    ## The constructor.
    def __init__(self):
        self._memVar = 0;
   
    ## Documentation for a method.
    #  @param self The object pointer.
    def MyMethod(self):
        pass
     
    ## A class variable.
    classVar = 0;
 
    ## @var _memVar
    #  a member variable
}
```{{copy}}

To support other kind of comments, you have to use filters (e.g. for bash scripts, https://github.com/Anvil/bash-doxygen).

Standard markdown is supported. For example, create the `file1.md` file:

```
# My title 1

## My title 2

>> My block quote

- My list item 1
- My list item 2

    My code

My ruler:

- - -

*My emphasis*

`My code`

[My link text](http://www.google.com/)

[My second link text](@ref MyClass) 

![My caption text](/path/to/image.png)

Automatic links:

<http://www.mywebsite.com>

<contact@mywebsite.com>

Tables:

My header 1  | My header 2
------------- | -------------
My cell 1  | My cell 3 
My cell 2  | My cell 4
```{{copy}}

## Markdown extensions

To allow to create links, Doxygen supports ID attributes.

Create the `file2.md` file:

```
# My header 1 {#myheader1}

## Header 1.1   {#myheader11}

# Header 2   {#myheader2}
```

Add this line to create a table of contents:

```
[TOC]
```

`@link <ENTITY> <TEXT> @endlink` creates a hyperlink to the entity `<ENTITY>`. It can be used in the home page to create a table of contents to the most important files in the project.

A brief description on a single line, ended by a period or blank line.

A longer comment, which may stretch over several lines and may include other things like:
- a list like this
- special markup like below

## The home page

You can use the `README.md` file as home page.

Create a `README.md` file:

```
# My main page                         {#mainpage}

It's my main page
```{{copy}}

## Advanced markup

- `@mainpage`: indicates this page is the main page, the home page,
- `@page [name] <title>`: indicates this comment block should appear in a new page,
- `@bug [description]`: indicates a bug,
- `@todo [description]`: indicates a "To Do" item. A "To Do" list is generated,
- `@deprecated [description]`: indicates this entity is deprecated,
- `@author [author-list]`: indicates the author(s),
- `@see [name-list]`: referes to other entities or URLs. To specify a member of a class, add `::` and the member name,
- `@param <name> <description>`: documents function parameters,
- `@return <description>`: documents function return values,
- `@pre { description of the precondition }`: describes the requirements of the function,
- `@code ... @endcode`: encloses a literal block of code,
- `@internal`: makes not appear the block in the output.
