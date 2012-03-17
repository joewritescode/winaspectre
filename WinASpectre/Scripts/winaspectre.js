        $(document).ready(function () {

           $("#tabStrip").kendoTabStrip();

            $("#grid").kendoGrid({
                dataSource: new kendo.data.DataSource({
                    transport: {
                        read: {
                            // the remote service url
                            url: "http://winaspectreapi.appspot.com/api/sessions",

                            // JSONP is required for cross-domain AJAX
                            dataType: "jsonp",

                            schema: {
                                model: {
                                    fields: {
                                        author: { type: "string" },
                                        title: { type: "string" },
                                        category: { type: "string" },
                                        description: { type: "string" },
                                        startTime: { type: "date" },
                                        endTime: { type: "date" },
                                        link: { type: "string" }
                                    }
                                }
                            }
                        }
                    },
                    pageSize: 6,
                    group: {
                        field: "startTime",
                        dir: "asc"
                    }

                }),
                height: 600,
                sortable: true,
                pageable: true,
                groupable: true,
                scrollable: true,
                columns: [
                            {
                                field: "author",
                                title: "Speaker",
 
                            },
                            {
                                field: "title",
                                title: "Title",
                                template: kendo.template("<a href=' #= link #'> #= title # </a>")
                            },
                            {
                                field: "category",
                                title: "Category"
                            },
                            {
                                
                                title: "Tweet about it",
                                template: kendo.template("<a href='http://twitter.com/home?status= #= link # %23cpl12 %23winaspectre' title='Click to tweet about this session!' target='_blank'><img src='http://twitter-badges.s3.amazonaws.com/t_logo-a.png' Border='0' alt='Tweet this!'/></a>")
                            }
                         ]

            });

             



        });