import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.styl']
})
export class AdminPageComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  // Ok. Ví dụ nhé chúng ta sẽ có danh sách member ở đây:
  members = [{
    id: 1,
    name: "Quach"
  }, {
    id: 2,
    name: "Nhat"
  }, {
    id: 3,
    name: "Hong"
  }, {
    id: 4,
    name: "Hieu"
  },]
  // Và chúng ta có danh sách id các editor ở dưới này
  editors = [123,124]
  addEditor(member) {
    // Nếu không tìm thấy id của member ở trong danh sách các editors
    if (this.editors.findIndex(_id => _id === member.id) === -1) {
      // Thì chúng ta sẽ thêm id của member đó vào danh sách các editor
      this.editors.push(member.name);
    }
    console.log(this.editors);
  }
  removeEditor(editor) {
    let editorId = this.editors.findIndex(_editor => _editor === editor);
    if (editorId !== -1) {
      this.editors.splice(editorId, 1);
    }
    console.log(this.editors)
  }
  removeMember(member){
    this.members.splice(member,1);
  } 
  // Đó xong rồi :D
  // Ok?
  // Chỉnh Sửa 
  //t o biết commit lên git

  // danh sách các file đã 
  // git add . để thêm các file trong thư mục hiện tại vào
  // git commit để lưu nó lại

  // đó nhưng đây mới chỉ là lưu lại trên máy ông thôi
  // để mọi người thấy được thì ông sẽ phải push nó lên remove (chính là git hub)
  // trước khi push thì ông phải pull thay đổi từ trên server về trước
  // Already up to date tức là chưa có thay đổi nào trên server
  // Nếu có thay đổi nó sẽ tự merge
  // Nếu thay đổi phức tạp không tự merge được thì ông sẽ phải sửa conflict ở trong file bị conflict sau đó commit lại lần nữa rồi mới push lên được

  // Ví dụ nhé

  // Đây là phần của ông viết
}
