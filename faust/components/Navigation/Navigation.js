import React from 'react';
import styles from './Navigation.module.scss';
import { flatListToHierarchical } from '@faustwp/core';

//converted flattened data from gql to hierarchical. 
function constructMenuData(menuData) {
    const { nodes } = menuData.menuItems;
    const hierarchicalMenu = flatListToHierarchical(nodes, {
        idKey: 'id',
        parentKey: 'parentId',
        childrenKey: 'children'
    });
    return hierarchicalMenu; 
}

// build menu nodes with children. 
const MenuItem = ({ node }) => (
    <li key={node.id}>
        <a className="menu-item" href={node.url}>{node.label}</a>
        {node.children && node.children.length > 0 && (
            <ul>
                {node.children.map((child, index) => (
                    <MenuItem key={`${node.id}-${index}`} node={child} />
                ))}
            </ul>
        )}
    </li>
);

export default function Navigation(props) {
    const hierarchicalNavigation = constructMenuData(props);
    return (
        <header className="transparent">            
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="de-flex sm-pt10">
                        <div className="de-flex-col">
                            <div className="de-flex-col">
                                <div id="logo">
                                    <a href="/">
                                        <img className="logo-1" src="images/logo-light.png" alt="" />
                                        <img className="logo-2" src="images/logo-light.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="de-flex-col header-col-mid">
                            <ul id="mainmenu">
                                {hierarchicalNavigation?.map(node => (
                                        <MenuItem key={node.id} node={node} />
                                ))}
                            </ul>
                        </div>
                        <div className="de-flex-col">
                            <div className="menu_side_area">
                                <a href="#" className="btn-main">Sign In</a>
                                <span id="menu-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
