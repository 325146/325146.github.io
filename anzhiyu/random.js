var posts=["2023/06/05/2.C++ 读书笔记/","2023/05/01/1.个人问题整理/","2023/06/01/1.C++岗位面试真题宝典/","2023/05/05/2.极客专栏笔记/","2023/01/01/day01笔记/","2023/06/10/3.C++ 面试突破/","2023/01/05/day02笔记/","2023/01/10/day03笔记/","2023/01/15/day04笔记/","2023/05/10/3.面经整理/","2023/01/25/day06笔记/","2023/01/20/day05笔记/","2023/01/30/day07笔记/","2023/02/05/day09笔记/","2023/02/01/day08笔记/","2023/02/10/day10笔记/","2023/02/15/day11笔记/","2023/05/10/秋招经验总结贴/","2023/02/20/day12笔记/","2023/03/01/学习笔记面经整理/","2023/05/01/秋招面试记录/","2023/04/01/设计模式之美 读书笔记/","2023/04/05/2.系列知识点总结/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};