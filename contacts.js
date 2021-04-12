const fs = require('fs')
const path = require('path')
    
const contactsPath = path.join(__dirname, './db/contacts.json')  //путь к ф. contacts.json



  function listContacts() {
    fs.readFile(contactsPath, 'utf-8', (err, content) => {
     if (err) {
        throw err
      }console.log(content)
    })
   
  }


function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf-8', (err, content) => {
    if (err) {
      throw err
    }
    const contacts = JSON.parse(content)
    const contact = contacts.find(contact => contact.id === contactId)
    console.log(contact)
  })
}



function removeContact(contactId) {
 fs.readFile(contactsPath, 'utf-8', (err, content) => {
    if (err) {
      throw err
    }
    const contacts = JSON.parse(content).filter(contact => contact.id !== contactId)
  
 
    console.log(contacts)
  })
}

