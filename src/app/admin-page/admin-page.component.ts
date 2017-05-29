import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.styl']
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

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

  editors = [123, 124];

  addEditor(member) {
    if (this.editors.findIndex(_id => _id === member.id) === -1) {
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

  removeMember(member) {
    this.members.splice(member, 1);
  }
}
