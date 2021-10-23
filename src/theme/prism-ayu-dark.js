'use strict';

var theme = {
    plain: {
        color: "#BFBDB6",
        backgroundColor: "#0D1017"
    },
    styles: [
        {
            types: ["comment", "prolog", "doctype", "cdata"],
            style: {
                color: "#ACB6BF8C",
                fontStyle: "italic"
            }
        },
        {
            types: ["namespace"],
            style: {
                opacity: 0.9
            }
        },
        {
            types: ["string", "attr-value"],
            style: {
                color: "#AAD94C"
            }
        },
        {
            types: ["operator"],
            style: {
                color: "#F29668"
            }
        },
        {
            types: ["entity", "url", "symbol", "variable", "property"],
            style: {
                color: "#59C2FF"
            }
        },
        {
            types: ['regex'],
            style: {
                color: '#95E6CB',
            },
        },
        {
            types: ['constant', 'number', 'boolean'],
            style: {
                color: '#D2A6FF'
            },
        },
        {
            types: ["atrule", "keyword", "attr-name", "selector"],
            style: {
                color: "#FF8F40"
            }
        },
        {
            types: ["function", "tag"],
            style: {
                color: "#FFB454"
            }
        },
        {
            types: ["function-variable"],
            style: {
                color: "#FFB454"
            }
        },
        {
            types: ["tag", "selector", "keyword"],
            style: {
                color: "#E6B673"
            }
        },
        {
            types: ['inserted'],
            style: {
                color: '#7FD962',
            },
        },
        {
            types: ['deleted'],
            style: {
                color: '#F26D78',
            },
        },
    ]
};

module.exports = theme;
