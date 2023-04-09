
    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "crud_task"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')

        const db = res1.db(dbname)

        //////////////////////////////////////////////////////////////


        // insertOne( Doc , options , callback )

        db.collection('users').insertOne({
            Fname : 'nesrine',
            Lname:"ben romdhane",
            age : 23
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })
        db.collection('users').insertOne({
            Fname : 'ahlem',
            Lname:"ben romdhane",
            age : 28
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })

        //////////////////////////////////////////////////////////////
        db.collection ('users').insertMany(
           [ {
            Fname : 'abir',
                Lname:"ben romdhane",
                age : 41
            },
            {
                Fname : 'abir',
                Lname:"ben romdhane",
                age : 27
            },
            {
                Fname : 'mariem',
                Lname:"ben romdhane",
                age : 18
            },
            {
                Fname : 'ghofrane',
                Lname:"srab",
                age : 27
            },
            {
                Fname : 'ghaylen',
                Lname:"ben romdhane",
                age : 20
            },
            {
                Fname : 'ahmed',
                Lname:"ben romdhane",
                age : 27
            },
            {
                Fname : 'souaad',
                Lname:"ben romdhane",
                age : 30
            },
            {
                Fname : 'mohamed aziz',
                Lname:"ben romdhane",
                age : 27
            },
            {
                Fname : 'wejden',
                Lname:"ben romdhane",
                age : 25
            },
            {
                Fname : 'aziz',
                Lname:"ben romdhane",
                age : 27
            },
          ] , (error,data)=>{
                if(error){
                    console.log('Unable to insert data')
                }
                console.log(data.insertedCount)
            } 
        )
      /////////////////////////////////////////////////////////////////////

      
      db.collection('users').find({age:27}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })

  
    

      ////////////////////////////////////////////////////////////////////
     
      db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })

    //////////////////////////////////////////////////////////////////////
      
     
      db.collection("users").updateOne({_id:mongodb.ObjectId("6432b6a9cc868826d993bc36")},{
        $set:{name : "user1" }
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

      db.collection("users").updateOne({_id:mongodb.ObjectId("6432b6a9cc868826d993bc37")},{
        $set:{name : "user2" }
      }).
      then((data2)=> {console.log(data2.modifiedCount)})
      .catch((error)=> {console.log(error)})

      db.collection("users").updateOne({_id:mongodb.ObjectId("6432b817c652d4f6f03ef05e")},{
        $set:{name : "user3" }
      }).
      then((data2)=> {console.log(data2.modifiedCount)})
      .catch((error)=> {console.log(error)})
      db.collection("users").updateOne({_id:mongodb.ObjectId("6432b817c652d4f6f03ef05f")},{
        $set:{name : "user4" }
      }).
      then((data2)=> {console.log(data2.modifiedCount)})
      .catch((error)=> {console.log(error)})

      /////////////////////////////////////////////////////////////////////////////////
      db.collection("users").updateOne({_id:mongodb.ObjectId("6432c7dcb1f6bc2bcb2585e5")},{
      
        $inc:{age : 4}
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})
      db.collection("users").updateOne({_id:mongodb.ObjectId("6432c7dcb1f6bc2bcb2585e7")},{
        $inc:{age : 4}
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})
      db.collection("users").updateOne({_id:mongodb.ObjectId("6432c7dcb1f6bc2bcb2585e9")},{
        $inc:{age : 4}
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})
      db.collection("users").updateOne({_id:mongodb.ObjectId("6432c7dcb1f6bc2bcb2585eb")},{
        $inc:{age : 4}
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})


    //   ////////////////////////////////////////////////////////////////////
      db.collection("users").updateMany({},{
        $inc : {age : 10}
      })
      .then((data1) =>{console.log(data1.modifiedCount)})
      .catch((error)=> console.log(error))

      ///////////////////////////////////////////////////////////////////

      db.collection("users").deleteMany({age:41})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))

  
 

    })


  

     


