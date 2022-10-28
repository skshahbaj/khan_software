import khan from "../models/category.model.js";


export const category = async (req, res) => {
    const product = await khan.create(req.body);
    if (product) {
        res.send({
            status: true,
            msg: 'create succefull',
            data: product
        })
    } else {
        res.send({
            status: false,
            msg: 'wrong create',
            data: {}
        })
    }

};

export const categoryLogin = async (req, res) => {
    var getuser = await khan.find({ status: "Deactive" }).populate("createdBy")
    if (getuser) {
        res.send({
            status: true,
            msg: "succfull login",
            data: getuser
        })
    } else {
        res.send({
            status: false,
            msg: "wrong login",
            data: {}
        })
    }

};

// export const updateCate = async(req,res)=>{
//      const update = await khan.findOneAndUpdate({name:req.body.name})
//      if(update){
//         res.send({
//             status:true,
//             msg:"succfull update",
//             data:update
//         })
//      }else{
//         res.send({
//             status:false,
//             msg:"wrong update",
//             data:{}
//         }) 
//      }
// };

// export const deleteCate = async(req,res)=>{
//     const catedelete = await khan.findOneAndDelete({name:req.body.name})
//     if(catedelete){
//         res.send({
//             status:true,
//             msg:"succfull delete",
//             data:catedelete
//         })
//      }else{
//         res.send({
//             status:false,
//             msg:"not find name",
//             data:{}
//         }) 
//      }
// };


