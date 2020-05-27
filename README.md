# SLIMERJS
http://slimerjs.org/

SlimerJS is a scriptable browser. It allows you to manipulate a web page with an external Javascript script: opening a webpage, clicking on links, modifying the content... It is useful to do functional tests, page automation, network monitoring, screen capture etc.

It is a tool like PhantomJs, except that it runs Gecko instead of Webkit, and it is headless when using Firefox 56+.

SlimerJS provides the same API of PhantomJS. The current version of SlimerJS is highly compatible with PhantomJS 2.1. See current release notes in docs/release-notes-*.rst, and read the compatibility table to know the implementation level.

The main goal of SlimerJS is to allow to execute all scripts developed for PhantomJS. So you could use tools like CasperJS. In fact, CasperJs 1.1 and higher can be executed with SlimerJS!

SlimerJS is not only a PhantomJS clone, it contains also additional features.

Technically, SlimerJS is a XUL/JS application that is launched with Firefox.
