import { Component } from '@angular/core';

@Component({
  selector: 'config-fragment-docs',
  template: `
    <h1>Fragment Documentation</h1>
    <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
      <a routerLink="..">&lt; Back</a>
      <a routerLink="/docs">Main Docs Page</a>
    </div>

    <p>In this section is explained how to use the ontology section of the tool.</p>

    <h3>Main page</h3>
    <p>The main page shows a filterable list of the defined fragments. The list presents two columns:</p>
    <ul>
      <li>
        <b>Ontology Fragment Name</b>: the name given to the fragment when ti hsa been defined
      </li>
      <li>
        <b>Ontology Name</b>: the name of the ontology
      </li>
    </ul>

    <p>
      On the upper-right corner of the table it is present a free text search in which it is possible to write any text
      to search in the table. If you want to filter on one or more columns, you can click on the <i class="fa-solid fa-filter"></i>
      icon next to column's name; it will open a popup in which to insert the text against which filter the data of the
      column.
    </p>

    <h3>Fragment Creation</h3>
    <p>
      By clicking the <button class="btn btn-primary"><i class="fa-solid fa-plus"></i>&nbsp;Add Ontology Fragment</button>
      button, the tool will redirect in a page in which it will be possible to define a new fragment.
    </p>

    <p>
      It will require to insert its name and the related ontology defined in the dedicated section (see
      <a routerLink="../ontology">Ontology</a>).
    </p>

    <p class="text-danger">
      <b>NOTE</b>: fragment's name must be unique for the same ontology, i.e.: you can't define two fragments with the
      same name for the same ontology.
    </p>

    <p>
      After the fragment is created, it will be shown in the table. You will be able to edit the fragment (add tests, data,
      files, etc.) by clicking the
      <button class="btn btn-sm btn-outline-warning"><i class="fa-solid fa-pencil"></i></button> button.
      <br>
      If you want to delete the fragment, you will be able to do it by clicking the
      <button class="btn btn-sm btn-outline-danger"><i class="fa-solid fa-trash-alt"></i></button> button.
      <span class="text-danger">
        <b>NOTE:</b> by deleting a fragment, all the related tests will be deleted too while files needs to be deleted
        manually.
      </span>
    </p>


    <h3>Fragment Detail</h3>
    <p>The page will show two tables:</p>
    <ul>
      <li>the first one will show the uploaded data along with the file name and the type of the data</li>
      <li>the second one will show the defined tests for the considered fragment</li>
    </ul>
    <p>Both are filterable as described in <b>Main Page</b> section.</p>

    <p>
      In the test cases table, by clicking on
      <button class="btn btn-sm btn-outline-warning"><i class="fa-solid fa-pencil"></i></button> button, you will be able
      to edit already defined tests, while clicking on
      <button class="btn btn-sm btn-outline-danger"><i class="fa-solid fa-trash-alt"></i></button> button you will delete
      existing tests.
    </p>

    <p>
      Clicking on <button class="btn btn-primary"><i class="fa-solid fa-plus me-2"></i> Create New Test Case</button>
      button, will bring you to the test creation page.
    </p>

  `,
  styles: [
  ]
})
export class FragmentDocsComponent {
}
