import {HeaderComponent} from './src/components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import {render, RenderPosition} from './render.js';


const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);