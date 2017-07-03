var gulp=require("gulp");
var minifyCss=require("gulp-minify-css");
var uglifyJs=require("gulp-uglify");
var minifyHtml=require("gulp-minify-html");

gulp.task("dealCss",function(){
   gulp.src("css/*.css")
       .pipe(minifyCss())
       .pipe(gulp.dest("yasuo/css"))
})
gulp.task("dealJs",function (){
   gulp.src("js/photo.js")
       .pipe(uglifyJs())
       .pipe(gulp.dest("yasuo/js"))
})
gulp.task("default",["dealCss","dealJs"])