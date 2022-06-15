import React from "react";
import { BiLike,BiSave,BiShareAlt } from 'react-icons/bi';
import {FiMoreHorizontal} from 'react-icons/fi'





function ArticleActions() {
  return (
    <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item py-3">
            <a className="nav-link active" aria-current="page" href="#">
              
            <h4><BiLike /></h4>
            </a>
          </li>
          <li className="nav-item py-3">
            <a className="nav-link" href="#">
            <h4><BiSave /></h4>
              
            </a>
          </li>
          <li className="nav-item py-3">
            <a className="nav-link" href="#">
            <h4><BiShareAlt /></h4>
              
            </a>
          </li>
          <li className="nav-item py-3">
            <a className="nav-link" href="#">
            <h4><FiMoreHorizontal /></h4>

            </a>
          </li>

        </ul>

    
      </div>
  );
}

export default ArticleActions;
