const write = require('./write')
const add = require('./add')
const read = require('./read')
const present = require('./present')
const del = require('./del')
const update = require('./update')
   
   const cmd = process.argv

   if (cmd[2] == 'add') {
      //Build object
      note = {
         id: cmd[3],
         title: cmd[4],
         body: cmd[5]
      }
   

    var oldnote = read()

    //Add old Note value
    add(note, oldnote)
   
   }

   if(cmd[2] == 'read'){
      present(read())
   }

   if (cmd[2] == 'delete') {
      const id = cmd[3]
      const oldnote = read()
      
      //delete an item from note array
      del(id, oldnote)
      console.log(read())
   }

   var note = {}

   if(cmd[2] === 'update') {
      const note = {
         id: cmd[3],
         title: cmd[4],
         body: cmd[5]
      }
      const oldNote = read()

      update(note, oldNote)

      present(read())
   }