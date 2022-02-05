
// Generated from /home/hazer-hazer/dev/jacylang/dev-book/docs/appendices/Jacy.g4 by ANTLR 4.8

#pragma once


#include "antlr4-runtime.h"
#include "JacyParser.h"



/**
 * This class defines an abstract visitor for a parse tree
 * produced by JacyParser.
 */
class  JacyVisitor : public antlr4::tree::AbstractParseTreeVisitor {
public:

  /**
   * Visit parse trees produced by JacyParser.
   */
    virtual antlrcpp::Any visitParty(JacyParser::PartyContext *context) = 0;

    virtual antlrcpp::Any visitItem_list(JacyParser::Item_listContext *context) = 0;

    virtual antlrcpp::Any visitItem(JacyParser::ItemContext *context) = 0;

    virtual antlrcpp::Any visitStruct(JacyParser::StructContext *context) = 0;


};

