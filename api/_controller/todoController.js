const db = require('../../plugins/mysql');

const todoController = {
    
    async getTest(){
        const query = 'SELECT * FROM vue.todo';
        const [[rows]] =await db.execute(query);
        return rows;
    }
    // getTest(){
    //     const data = {
    //         status : 200,
    //         msg : 'router test 입니다.'
    //     }
    //         return data;
    // }
}
module.exports = todoController;