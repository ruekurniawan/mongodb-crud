# mongodb-crud

#### made with Express and Mongodb


| Route | HTTP | Headers | Body | Authentication | Authorize | Description |
| ----- | ---- | ------- | ---- | -------------- | --------- | ----------- |
| /books | __POST__ | none | isbn: string, title: string, author : string, category : string, stock : number| __none__ | __none__ | Create a new books |
| /books | __GET__ | none | isbn: string, title: string, author : string, category : string, stock : number| __none__ | __none__ | FindAll all books |
| /books/:id | __GET__ | none | none | __none__ | __none__ | FindOne one book |
| /books/:id | __PUT__ | none | none | __none__ | __none__ | Update a book |
| /books/:id | __DELETE__ | none | none | __none__ | __none__ | Delete a book |



#### Usage
Make sure you have Node.js and npm installed on your computer, then run these command.
````
$ npm install
````