(function($){

    $(function() {
  
      var datascource = {
        'name': 'CEO',
        'title': 'Bùi văn Ninh',
        'children': [
          { 'name': 'Bộ phận Marketing', 'title': 'department manager', 'className': 'no-content nodeGreen node-no-content',
            'children': [
              { 'name': 'Quản trị web', 'title': 'Quản trị web', 'className': 'no-content nodeYellow node-no-content',
                'children': [
                    { 'name': 'Leader Seo', 'title': 'Trần Việt', 'className': 'nodeOrgan',
                      'children': [
                        { 'name': 'Phó leader SEO', 'title': 'Phát Nguyễn', 'className': 'nodePink', 
                          'children': [
                            { 'name': 'Coder', 'title': 'Hữu Nghĩa', 'className': 'nodeGreen1',
                              'children': [
                                { 'name': 'Coder', 'title': 'Nghĩa', 'className': 'nodeGreen1',
                                  'children': [
                                    { 'name': 'Chỉnh sửa thông tin', 'title': 'A.Cường', 'className': 'nodeBlue',
                                      'children': [
                                        { 'name': 'Editor', 'title': 'Trọng', 'className': 'nodeBlue' },
                                      ]
                                     },
                                  ]
                                },
                              ]
                             },
                            { 'name': 'Leader Content', 'title': 'Ngọc Hương', 'className': 'nodeGreen1',
                              'children': [
                                { 'name': 'CSKH', 'title': 'Lương Hải', 'className': 'nodeGreen1 vertical-nodes',
                                  'children': [
                                    { 'name': 'Content', 'title': 'Đầm', 'className': 'no-hierarchy' },
                                    { 'name': 'Content', 'title': 'hà', 'className': 'no-hierarchy' },
                                    { 'name': 'Content', 'title': 'Uyên', 'className': 'no-hierarchy' },
                                    { 'name': 'Content', 'title': 'Như Trân', 'className': 'no-hierarchy' },
                                    { 'name': 'Content', 'title': 'Mỹ Tiên', 'className': 'no-hierarchy' },
                                    { 'name': 'Content', 'title': 'Nhung', 'className': 'no-hierarchy' },
                                    { 'name': 'Content', 'title': 'Tịnh', 'className': 'no-hierarchy' },
                                    { 'name': 'Content', 'title': 'Nhã', 'className': 'no-hierarchy' },
                                  ]
                                 },
                              ]
                             },
                          ]
                         }
                      ]
                     },
                ]
               },
              { 'name': 'Phòng kinh doanh', 'title': 'Phòng kinh doanh', 'className': 'no-content',
                'children': [
                  { 'name': 'trưởng phòng kinh doanh', 'title': 'Đạo Hoàng Lân', 'className': 'nodeBlue1', 
                    'children': [
                      { 'name': 'phó phòng kinh doanh', 'title': 'Bảo Ngọc', 'className': 'nodeBlue2',
                        'children': [
                          { 'name': 'Nhân viên Maps', 'title': 'Phạm Quỳnh', 'className': 'nodePink1' },
                        ]
                       },
                    ]
                   },
                ]
              }
            ]
          },
          { 'name': 'Bộ phận hành chính - nhân sự', 'title': 'department manager', 'className': 'nodeGreen no-content', 
            'children': [
              {'name': 'Tài chính', 'title': 'Diễm My', 'className': 'nodeGreen1', 
                'children': [
                  {'name': 'Kế toàn tổng hợp', 'title': 'Diễm Quỳnh', 'className': 'nodeBlue'}
                ]
              }
            ]
          },
          {'name': 'bộ phận Caller Center', 'title': 'department manager', 'className': 'no-content nodeGreen', 
            'children': [
              {'name': 'Trưởng phòng quản lí và kiểm soát chất lượng', 'title': 'Anh Hùng Cường', 'className': 'nodeYellow', 
                'children': [
                  {'name': 'Quản lí Vivutoday', 'title': 'Huyền Tâm', 'className': 'nodeBlue', 
                    'children': [
                      {'name': 'Kim yến', 'title': '', 'className': 'nodeRed nodeItem vertical-nodes', 
                        'children': [
                          {'name': 'Bích Châu', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Thị Hoa', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Thuỳ Trang', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Thanh Trúc', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Kim Thoa', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Hoàng Ngân', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Trúc Nhi', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'TThu Thương', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                        ]
                      },
                      {'name': 'Huyền Ngân', 'title': '', 'className': 'nodeRed nodeItem vertical-nodes', 
                        'children': [
                          {'name': 'Bích Trân', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Thị Liên', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Oanh Vũ', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Thị Hồng', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Kim Thoa', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                          {'name': 'Kim Hoa', 'title': 'Mỹ Linh', 'className': 'nodeRed nodeItem'},
                        ]
                      },
                    ]
                  },
                  {'name': 'Quản lí Goilaco', 'title': 'Mỹ Linh', 'className': 'nodeBlue'},
                  {'name': 'Quản lí Techwise', 'title': 'Ngọc Thư', 'className': 'nodeBlue'},
                  {'name': 'Quản lí Online', 'title': 'Kim Chi', 'className': 'nodeBlue'},
                ]
              }
            ]
          }
        ],
      };
  
      var oc = $('#chart-container').orgchart({
        'data' : datascource,
        'nodeContent': 'title'
      });
  
    });
  
  })(jQuery);