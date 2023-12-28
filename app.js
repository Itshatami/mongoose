const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mongo-exercises")
.then(() => console.log('Connected'))
.catch(err => console.log('faild connection'));

const courseSchema = new mongoose.Schema({
   name:String,
   author:String,
   date:{
      type: Date,
      default:Date().now
   },
   tags:[String],
   isPublished:Boolean,
   price:Number
})

const Course = mongoose.model('Course' , courseSchema);

async function postCourse(){
   const course = new Course({
      name:'vue mastery by duke',
      author:'duke',
      tags:['js' , 'Frondend' , 'vue' ],
      isPublished:true,
      price:27
   })
   const result = await course.save();
   console.log(result);
}
// postCourse()

// async function getCourses(){
//    const courses = await Course.find({isPublished:true})
// .or([{price:{$gt:15}} , {name:/.*by.*/}])
//    .select("name author")
//    console.log(courses);
// }
// getCourses()

// async function getCourses(){
//    const courses = await Course.find({isPublished:true})
//    .or([{tags:'Backend'} , {tags:'Desktop'}])
//    .sort({price: -1})
//    .select("name author")
//    console.log(courses);
// }
// getCourses()

// Approuch: QueryFirst => اینجا اول داکیومنت رو برمیگردونیم بعدش مقادیرشو تغییر میدیم و بعد ذخیره میکنیم
// async function updateCourse(id){
   // findById()
   // const course = await Course.findById(id);
   // if(!course) return;
   
   // Modify its properties
   // course.author= 'alireza';
   // course.price=30;
   // course.set({
   //    author:'alireza',
   //    price:30
   // })
   
   // save the course
//    const result = await course.save();
//    console.log(result);
// }
// updateCourse('658d48e459194a3d2a937694')

// Approuch:UpdateFirst => ما در اینجا مستقیم داکیومنت را آپدیت میکنم و سرعت کار بالا میرود
// async function updateCourse(id){
//    const result = await Course.findByIdAndUpdate(id, {
//       $set:{
//          author:'mobin',
//          price:12
//       }
//    } , {new:true})
//    console.log(result);
// }
// updateCourse('658d48e459194a3d2a937694')

// Delete
async function deleteCourse(id){
   // const result = await Course.deleteOne({_id:id});
   const course = await Course.findByIdAndDelete(id);
   console.log(course);
}
// deleteCourse('658d48b8bc601154dd276a06')