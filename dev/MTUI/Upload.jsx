/**
* HTML5 上传 XHR
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'

//插件
var xhr = new XMLHttpRequest();
const Upload = React.createClass({
    getInitialState() {
        return {
            style : {}  
        };
    },

    //监听选择文件信息
    fileSelected() {
    //HTML5文件API操作
      var file = document.getElementById('fileName').files[0];
      if (file) {
        var fileSize = 0;
        if (file.size > 1024 * 1024)
          fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
        else
          fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

        console.log(file,fileSize);
        // document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
        // document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
        // document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
      }

      //选择文件后，自动上传
      this.uploadFile();
    },

    //上传文件
    uploadFile() {

      this.setState({
          style : {
              width : 0
          }
      });

      var fd = new FormData();
      //关联表单数据,可以是自定义参数
      fd.append("fileName", document.getElementById('fileName').files[0]);

      //表单值
      fd.append("name", 'ssssssssss');
      fd.append("test", 'dddddddddd');

      //抬头
      xhr.overrideMimeType("application/octet-stream"); //文件流

      //监听事件
      xhr.upload.addEventListener("progress", this.uploadProgress, false);
      //xhr.addEventListener("load", this.uploadComplete, false);
      xhr.addEventListener("loadend", this.uploadEnd, false); //无论成功，失败，都会执行
      xhr.addEventListener("error", this.uploadFailed, false);
      xhr.addEventListener("abort", this.uploadCanceled, false);
      //发送文件和表单自定义参数
      xhr.open("POST", "/upload/");
      xhr.send(fd);
    },
    
    //上传进度
    uploadProgress(evt) {
          if (evt.lengthComputable) {
            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
            $(this.refs.text).html(percentComplete.toString() + '%'); 
            this.setState({
                style : {
                    width : percentComplete.toString() + '%'
                }
            });
          }
          else {
            $(this.refs.text).html('unable to compute'); 
          }
    },

    //上传成功
    // uploadComplete(evt) {
    //     //服务断接收完文件返回的结果
    //     alert(evt.target.responseText);
    //     //$(this.refs.text).html('上传完成');
    // },

    //上传操作完成
    uploadEnd(evt){
      return
        console.log(xhr);
        if(xhr.readyState == 4){ //上传完成
            if(xhr.status == 404){
                this.setState({
                    style : {
                        transition: '0s', 
                        width : '100%',
                        text : '上传失败'
                    }
                });
                $(this.refs.text).html('error');
                console.log(xhr.responseText);
            }else if(xhr.status == 200){
                $(this.refs.text).html('上传成功');
            }
        }
    },

    //取消上传
    cancleUploadFile(){
        xhr.abort();
    },
        
    //上传失败
    uploadFailed(evt) {
        //alert("上传失败");
        $(this.refs.text).html('上传失败');
    },

    //取消上传
    uploadCanceled(evt) {
        alert("您取消了本次上传.");
    },

    render(){
        var styles = {
           width : this.props.width
        }
        return (
            <div className="mt-btn-round-green mt-upload" style={styles} ref="uploadBox">
                <span className="mt-upload-text" ref="text">文件上传</span>
                <div style={this.state.style} className="mt-upload-progress" ref="progress"></div>
                <input type="file" name="fileName" multiple="multiple" id="fileName" onChange={this.fileSelected}/>
            </div>
        );
    }
});

//配置信息
export default Upload;
