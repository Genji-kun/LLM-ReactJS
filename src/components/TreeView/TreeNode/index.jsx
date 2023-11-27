import PropTypes from 'prop-types';
import { useState } from 'react';
import { PiFolder, PiFolderOpen, PiFile } from "react-icons/pi";


const TreeNode = ({ data }) => {
    const [expand, setExpand] = useState(false);
    return (
        <div className="">
            <div className="w-full cursor-pointer p-2 flex gap-2 items-center hover:bg-blue-100" onClick={() => setExpand(!expand)}>
                {data.isFolder ? (expand ? <PiFolderOpen size="20" /> : <PiFolder size="20" />) : <PiFile size="20" />}
                <span>{data.name}</span>
            </div>
            <div className={`${expand ? "block ml-3.5 pl-4 border-l-2 border-gray-500" : "hidden"}`}>
                {data.items && data.items.map((child) => (
                    <TreeNode key={child.name} data={child} />
                ))}
            </div>
        </div >
    );
};

TreeNode.propTypes = {
    data: PropTypes.object.isRequired,
};

export default TreeNode;
