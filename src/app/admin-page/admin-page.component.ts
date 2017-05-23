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
    id: 1234,
    name: "lsdfkjalsdkjfalsdkj"
  }, {
    id: 1213,
    name: "lsdfkjalsdkjfalsdkj"
  }, {
    id: 432,
    name: "lsdfkasdfdjfalsdkj"
  }, {
    id: 423432,
    name: "lsdfkjalsdkjfalsdkj"
  }]

  // Và chúng ta có danh sách id các editor ở dưới này

  editors = [1234, 432]

  addEditor(member) {
    // Nếu không tìm thấy id của member ở trong danh sách các editors
    if (this.editors.findIndex(_id => _id === member.id) === -1) {
      // Thì chúng ta sẽ thêm id của member đó vào danh sách các editor

      this.editors.push(member.id);
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
}
