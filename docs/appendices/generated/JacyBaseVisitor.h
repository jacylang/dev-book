
// Generated from /home/hazer-hazer/dev/jacylang/dev-book/docs/appendices/Jacy.g4 by ANTLR 4.8

#pragma once


#include "antlr4-runtime.h"
#include "JacyVisitor.h"


/**
 * This class provides an empty implementation of JacyVisitor, which can be
 * extended to create a visitor which only needs to handle a subset of the available methods.
 */
class  JacyBaseVisitor : public JacyVisitor {
public:

  virtual antlrcpp::Any visitParty(JacyParser::PartyContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual antlrcpp::Any visitItem_list(JacyParser::Item_listContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual antlrcpp::Any visitItem(JacyParser::ItemContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual antlrcpp::Any visitStruct(JacyParser::StructContext *ctx) override {
    return visitChildren(ctx);
  }


};

