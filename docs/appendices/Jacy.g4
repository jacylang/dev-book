grammar Jacy;

party: item_list EOF;

item_list: item*;

// Items //
item: struct;

struct: 'struct' '';
