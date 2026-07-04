use('usersManagementSystem')

db.createCollection('users')

// create 



// db.users.insertMany([
//     {
//         'name': 'bodhi',
//         'age': 18,
//         'height': 5.4,
//         'places': ['warangal', 'hyderabad', 'banglore', 'kerala']
//     },
//     {
//         'name': 'aarav',
//         'age': 21,
//         'height': 5.7,
//         'places': ['delhi', 'mumbai', 'pune', 'jaipur']
//     },
//     {
//         'name': 'meera',
//         'age': 19,
//         'height': 5.3,
//         'places': ['chennai', 'madurai', 'pondicherry', 'ooty']
//     },
//     {
//         'name': 'arjun',
//         'age': 22,
//         'height': 6.0,
//         'places': ['kolkata', 'darjeeling', 'guwahati', 'shillong']
//     },
//     {
//         'name': 'isha',
//         'age': 20,
//         'height': 5.5,
//         'places': ['ahmedabad', 'surat', 'rajkot', 'vadodara']
//     },
//     {
//         'name': 'veer',
//         'age': 23,
//         'height': 5.9,
//         'places': ['lucknow', 'kanpur', 'agra', 'varanasi']
//     },
//     {
//         'name': 'kavya',
//         'age': 18,
//         'height': 5.2,
//         'places': ['goa', 'mangalore', 'coorg', 'udupi']
//     },
//     {
//         'name': 'samar',
//         'age': 24,
//         'height': 6.1,
//         'places': ['bhopal', 'indore', 'gwalior', 'jabalpur']
//     },
//     {
//         'name': 'anaya',
//         'age': 19,
//         'height': 5.4,
//         'places': ['patna', 'ranchi', 'bhubaneswar', 'cuttack']
//     },
//     {
//         'name': 'raj',
//         'age': 25,
//         'height': 5.8,
//         'places': ['shimla', 'manali', 'dharamshala', 'kullu']
//     }
    
// ])


// read



// db.users.findOne({ 'name' : 'bodhi'})

// db.users.find({}, { name : 0 }).sort({ height : 1, age : 1})



// update



// db.users.updateOne( { 'name' : 'meera' }, { $set : {age : 28  , height : 5.9} } )

// db.users.updateMany({}, { $inc : { age : 4}})

// db.users.updateOne( { 'name' : 'meera' } , { $set : { places : ["ooty",
//       "warangal",
//       "chennai"]}})

// db.users.updateOne({ 'name' : 'meera' }, { $push : { places : 'madhurai'}})

// db.users.updateOne({ "name" : 'meera'} , { $unset : { 'weight' : ""}})

// delete 

// db.users.deleteOne({ 'name' : 'anaya'})

db.users.find({})