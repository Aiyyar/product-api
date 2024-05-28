const product=require("../models/product")





const getAllProducts=async(req,res)=>{

const {company,name,featured,sort,select}=req.query;
const queryObject={};
if(company){
    queryObject.company=company;
}
if(featured)[
    queryObject.featured=featured,
]
if(name){
    queryObject.name={$regex:name,$options:"i"};
}
console.log(queryObject.company);
let apidata=product.find(queryObject);
if(sort){
     let sortfix=sort.replace(","," ");
apidata=apidata.sort(sortfix);
}
if(select){
    //  let selectfix=select.replace(","," ");
     let selectfix=select.split(",").join(" ");
apidata=apidata.select(selectfix);
}

let page=Number(req.query.page)|| 1;
let limit=Number(req.query.limit)||3;
let skip =(page-1)*limit;
apidata=apidata.skip(skip).limit(limit);
console.log(queryObject)
const myData=await apidata.sort(sort);
res.status(200).json({myData});
}


const getAllProductsTesting=async(req,res)=>{
   const myData=await product.find(req.query).sort();  
res.status(200).json({myData});

}

module.exports={getAllProducts,getAllProductsTesting};