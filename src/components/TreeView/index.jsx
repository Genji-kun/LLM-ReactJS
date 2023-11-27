import TreeNode from "./TreeNode"

const dataList = [
    {
        name: "Chủ đề số 1: An ninh quốc gia",
        isFolder: true,
        items: [
            {
                name: "Đề mục số 1: An ninh quốc gia",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 2: Bảo vệ bí mật nhà nước",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 3: Biên giới quốc gia",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 4: Biển Việt Nam",
                isFolder: false,
                items: []
            },
        ]
    }, {
        name: "Chủ đề số 2: Bảo hiểm",
        isFolder: true,
        items: [
            {
                name: "Đề mục số 1: Bảo hiểm xã hội",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 2: Bảo vệ y tế",
                isFolder: false,
                items: []
            },
        ]
    }, {
        name: "Chủ đề số 3: Bưu chính viễn thông",
        isFolder: true,
        items: [
            {
                name: "Đề mục số 1: An toàn thông tin mạng",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 2: Bưu chính",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 3: Công nghệ thông tin",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 4: Giao dịch điện tử",
                isFolder: false,
                items: []
            },
        ]
    }, {
        name: "Chủ đề số 4: Bổ trợ tư pháp",
        isFolder: true,
        items: [
            {
                name: "Đề mục số 1: Đấu giá tài sản",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 2: Công chứng",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 3: Giám định tư pháp",
                isFolder: false,
                items: []
            },
            {
                name: "Đề mục số 4: Luật sư",
                isFolder: false,
                items: []
            },
        ]
    }
];

const TreeView = () => {
    return (
        <>
            {dataList.map((tree, index) => {
                return (<TreeNode key={index} data={tree}></TreeNode>);
            })}
        </>
    );
};

export default TreeView;