
//import user3A from "src/hooks/user3A";
//var todday = () => Math.floor(Date.now() / 1000);
var todday = () => new Date().toLocaleString();//.split("T")[0];
var ObjectID =""
//-------------USER PROFILE_Variables..

const saleitcompute ={
  _rank:{
    type: String,
    default: "others",
  },
}
const saleitSchema = {
  //-------------item_staus(stage)
  _stage_: {
    type:Number,vtype:"Number",
    default:1,
  },
  //-------
  userID: { // will hold User_ID/phone as ref_value
    type: String,vtype:"String",
    default: "",
    $ifNull: "",
  },
  phone: { // will hold User_ID/phone as ref_value
    type: Number,vtype:"Number",
    default: "",
    $ifNull: "",
  },
  phoneCode: {
    type: Array,vtype:"Array",
    default: ['',''],
    $ifNull: ['',''],
    required:true,
  },
  userName: { // will hold User_ID/phone as ref_value
    type: String,vtype:"String",
    default: "",
    $ifNull: "",
  },  
  //---------//----  jack
  catagory: {
    type: String,vtype:"String",
    default: "Households",
    enum: ["Vehicles", "Households","Phones","Displays"],
  },
  queryWeight: { //yyyy(year)-00(catagoryindex)-00(subCat_)-0(trend)-......
    type: String,vtype:"String",
    default: "2024-00-00-0",
    $ifNull: "2024-00-00-0",
  },
  //---------
  usage: { //
      type: String,vtype:"String",
      default: "Used",
      $ifNull: "Used",
      enum: ["New", "Used","?",""],
    },
  //---------
  saleitgr:{
    type:Array,
    default:["/saleitgr/saleitpng.png"],
    vtype:'file'
    },
  header: {
      type: String,vtype:"String",
      default: "....",
      $ifNull: "....",
      validRuleset:"[ val => val && val.length > 0 || 'Please type something']"
    },
  content: {
     type: String,vtype:"String",
      textarea:true,
      default: "....", 
      $ifNull: "....",
      //---
    },
  quantity: {
      type: Number,vtype:'Number',
       default: 1,
       $ifNull: 1,
     },
  price: {
     type: Number,vtype:'Number',
      default: 0,
      $ifNull: 0,
    },
  discount: {
      type: Number,vtype:'Number',
       default: 0,
       $ifNull: 0,
     },
  tPrice: {
      type: Number,vtype:'Number',
       default: 0,
       $ifNull: 0,
     },
  location: {
      country: {
        type: String,
          default: "",
          $ifNull: "",
        },
        provinance: {
        type: String,
          default: "",
          $ifNull: "",
        },
        city: {
        type: String,
          default: "",
          $ifNull: "",
        },
        street: {
          type: String,
            default: "",
            $ifNull: "",
          },
      },
  geolocation: { //content GPS 
      lat: {
        type: String,vtype:"String",
        default: "000000",
        $ifNull: "000000",
      },
      long: {
        type:String,vtype:"String",
        default: "000001",
        $ifNull: "000001",
      }
    },
    //---------put timer for action 
    timer:{
        action:{
          type:String,vtype:"String",
          enum:['delete','expired','sold',''],
          default:'',
          $ifNull:''
        },
        hours:{
          type:Number,
          vtype:'Number',
          default:-1,
          $ifNull:-1
        },
        days:{
          type:Number,
          vtype:'Number',
          default:-1,
          $ifNull:-1
        }
    },
    //String
    //---------
    status: {
      type: String,vtype:"String",
       default: "posted",
       $ifNull: "posted",
       enum: ["posted", "sold","Paused","discarded"],
     },
    clients:{
      type:Array,   ///array better to have default value on client side, for template form_generation
      default:[{ phone:"",phoneCode:'',userID:'',userName:'',orderID:'',confirmID:'',
       quantity:0,price:0,paymentMethod:'onDelivery',served:"Requested",time:new Date() } ],
      vdata: {
        geolocation: { //content GPS locations
          lat: {
            type: String,vtype:"String",
            default: "000000",
            $ifNull: "000000",
          },
          long: {
            type:String,vtype:"String",
            default: "000001",
            $ifNull: "000001",
          }
        },
        phone: { // will hold User_ID/phone as ref_value
          type: Number,vtype:"Number",
          default: "",
          $ifNull: "",
        },
        phoneCode: {
          type: Array,vtype:"Array",
          default: ['',''],
          $ifNull: ['',''],
          required:true,
        },
        userName: {
          type: String,vtype:"String",
          default: "",
          $ifNull: "",
        },
        userID: {
          type: String,vtype:"String",
          default: "",
          $ifNull: "",
        },
        orderID: { //---
          type: String,vtype:"String",
          default: "",
          $ifNull: "",
        },
        confirmID: {
          type: String,vtype:"String",
          default: "xyxy",
          $ifNull: "+xyxy",
        },
        quantity: {
          type: Number,vtype:'Number',
          default: 0,
          $ifNull: 0,
        },
        price: {
          type: Number,vtype:'Number',
          default: 0,
          $ifNull: 0,
        },

        paymentMethod: {
          type: String,vtype:"String",
          default: "onDelivery",
          $ifNull: "onDelivery",
          enum: ["onDelivery","TELBirr","EBCBirr","others"],
        },
        time: {
          type: Date,vtype:'Date',
          default:new Date(),
          $ifNull:new Date(),
        },
        description: {
          type: String,vtype:"String",
          default: "",
          $ifNull: "",
        },
        served: {
          type: String,vtype:"String",
          default: "Requested",
          $ifNull: "Requested",
          enum: ["Served","Queed", "Requested"],
        },
      }
    },
     comments:{
      type:Array,
      default:[ { comment:"", UserID:"",time:new Date() } ],
      vdata: {
        comment: {
          type: String,vtype:"String",
          default: "",
          $ifNull: "",
        },
        userID: {
          type: String,vtype:"String",
          default: "",
          $ifNull: "",
        },
        userName: {
          type: String,vtype:"String",
          default: "",
          $ifNull: "",
        },
        time:{
          type:Date,
          vtype:'Date',
          default:new Date(),
          $ifNull:new Date(),
        } 
      }
    },
     likes: {
      like: {
        type: Number,vtype:"Number",
        default: 0,
        $ifNull: 0,
      },
      dislike: {
        type: Number,vtype:"Number",
        default: 0,
        $ifNull: 0,
      }
      },
      completed: {
        type: Boolean,vtype:'Boolean', //it hold winner_client id of registered clients
        default: false,
        $ifNull: false,
      },
      _itServiceRating: {
        type: Number,vtype:'Number', //it hold winner_client id of registered clients
        default: 0,
        $ifNull: 0,
      },
       //---------------------------------
    //saleitcompute,
    //---------------------------------
  }

const saleitMetacompute ={
    _rank:{
      type: String,
      default: "others",
    },

  }
const saleitMetaSchema ={
  _stage_: {
    type:Number,
    default:1,
  },
  }


export { saleitSchema,saleitMetaSchema}