import Mock from 'mockjs';
export default Mock.mock({
    'head':[
        {   
            'id': '1',
            'onedata': [
                {   
                    'title': '技术',
                    'datlist': [
                        {
                            'tito': '前端',
                            'tits': '后端'
                        }
                    ]
                }
            ],
            'twodata': [
                {   
                    'id': '2',
                    'title': '美食',
                    'datlist': [
                        {
                            'tito': '川菜',
                            'tits': '粤菜'
                        }
                    ]
                }
            ]
        }
    ]
})