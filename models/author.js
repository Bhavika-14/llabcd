var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var AuthorSchema=new Schema(
    {
        first_name:{type :String,required:true,maxlength:100},
        family_name:{type :String,required:true,maxlength:100}
    }
);

AuthorSchema.virtual('name').get(
    function(){
        var fullname='';
        if(this.first_name && this.family_name){
            fullname=this.family_name+','+this.first_name
        }
        if(!this.first_name||!this.family_name){
            fullname='';
        }
        return fullname;
    }
);

AuthorSchema.virtual('url').get(
    function(){
        return '/catalog/author/'+this._id;
    }
);

module.exports=mongoose.model('Author',AuthorSchema);