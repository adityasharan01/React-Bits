const mongoose = require('mongoose');

const url = 'mongodb+srv://adityasharan:Fin0909@mycluster.an5fo.mongodb.net/myarticles?retryWrites=true&w=majority'
 //Url consist up of username , Password , DBName
// db connection
var db = mongoose.connect(url,{ useNewUrlParser: true},(err) => {
    if(!err){
        console.log('Connect ho gaiyluu Re !!');
    }
    else {
        console.log('connect nhi hua' + " " +err);
    }
})

//Schema 
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype: String,
    videos:Number,
    author:String,
    active:Boolean,
    date: {
        type:Date,
        default:Date.now()
    }
})

//Model
const Playlist= new mongoose.model("Playlist",playlistSchema);  //Class ke tarah work krr rha hai issiliye Pascal case 

// const reactPlaylist = new Playlist({
//     name:"React.js",
//     ctype: "Front END Developemnt",
//     videos:80,
//     author:"Aditya SHaran",
//     active:true
// })

// reactPlaylist.save();

//--------------------------------------------------------------------------
//TO INSERT ONE DOCUMENT

// const createDocument = async ()=>{
//     try{
//         const reactPlaylist = new Playlist({
//             name:"Node.js",
//             ctype: "Back END Developemnt",
//             videos:50,
//             author:"Aditya SHaran",
//             active:true
//         })
//         const result = await reactPlaylist.save();  // .save function use on document ka object Not the Class ka Object
//         console.log(result);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// createDocument();
//--------------------------------------------------------------------------
//To Insert Multiple Documents we can do this 

const createDocument = async ()=>{
    try{
        const javaPlaylist = new Playlist({
            name:"Java",
            ctype: "Back END Developemnt",
            videos:50,
            author:"Aditya SHaran",
            active:true
        })
        const rubyPlaylist = new Playlist({
            name:"RUBY",
            ctype: "Back END Developemnt",
            videos:50,
            author:"Aditya SHaran",
            active:true
        })
        const golangPlaylist = new Playlist({
            name:"GO Lang",
            ctype: "Back END Developemnt",
            videos:50,
            author:"Aditya SHaran",
            active:true
        })

        const result = await Playlist.insertMany([javaPlaylist,rubyPlaylist,golangPlaylist]);  //Multiple query insert 
        console.log(result);
    }
    catch(err){
        console.log(err)
    }
}

//createDocument();
//------------------------------------------------------------------------------------
//How to Read or Quering Documents in Mongoose
// const getDocument = async () => {
//     try{
//     const result= await Playlist.find({ctype: "Back END Developemnt"})
//     .select({name:1})
//     .limit(1);
//     console.log(result);

//     }
//     catch(err){
//         console.log(err);
//     }
// }

// getDocument();

//-------------------------Comparison Operator----------------------------
const getDocument = async () => {
    try{
    const result= await Playlist
    .find({videos : {$gte:50}})
    .select({name:1})
    // .limit(1);
    console.log(result);

    }
    catch(err){
        console.log(err);
    }
}

getDocument();
