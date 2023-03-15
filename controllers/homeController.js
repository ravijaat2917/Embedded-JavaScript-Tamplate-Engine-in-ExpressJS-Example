const homeController = (req,res)=>{
    const data = {
        'name':'Ravi',
        'marks':[60,40,20,45,32,32],
        'i':0
    }
    res.render('index' , data);
}
export {homeController};