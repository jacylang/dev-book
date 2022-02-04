
// Generated from /home/hazer-hazer/dev/jacylang/dev-book/docs/appendices/Jacy.g4 by ANTLR 4.8


#include "JacyVisitor.h"

#include "JacyParser.h"


using namespace antlrcpp;
using namespace antlr4;

JacyParser::JacyParser(TokenStream *input) : Parser(input) {
  _interpreter = new atn::ParserATNSimulator(this, _atn, _decisionToDFA, _sharedContextCache);
}

JacyParser::~JacyParser() {
  delete _interpreter;
}

std::string JacyParser::getGrammarFileName() const {
  return "Jacy.g4";
}

const std::vector<std::string>& JacyParser::getRuleNames() const {
  return _ruleNames;
}

dfa::Vocabulary& JacyParser::getVocabulary() const {
  return _vocabulary;
}


//----------------- PartyContext ------------------------------------------------------------------

JacyParser::PartyContext::PartyContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

JacyParser::Item_listContext* JacyParser::PartyContext::item_list() {
  return getRuleContext<JacyParser::Item_listContext>(0);
}

tree::TerminalNode* JacyParser::PartyContext::EOF() {
  return getToken(JacyParser::EOF, 0);
}


size_t JacyParser::PartyContext::getRuleIndex() const {
  return JacyParser::RuleParty;
}


antlrcpp::Any JacyParser::PartyContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<JacyVisitor*>(visitor))
    return parserVisitor->visitParty(this);
  else
    return visitor->visitChildren(this);
}

JacyParser::PartyContext* JacyParser::party() {
  PartyContext *_localctx = _tracker.createInstance<PartyContext>(_ctx, getState());
  enterRule(_localctx, 0, JacyParser::RuleParty);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(8);
    item_list();
    setState(9);
    match(JacyParser::EOF);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Item_listContext ------------------------------------------------------------------

JacyParser::Item_listContext::Item_listContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<JacyParser::ItemContext *> JacyParser::Item_listContext::item() {
  return getRuleContexts<JacyParser::ItemContext>();
}

JacyParser::ItemContext* JacyParser::Item_listContext::item(size_t i) {
  return getRuleContext<JacyParser::ItemContext>(i);
}


size_t JacyParser::Item_listContext::getRuleIndex() const {
  return JacyParser::RuleItem_list;
}


antlrcpp::Any JacyParser::Item_listContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<JacyVisitor*>(visitor))
    return parserVisitor->visitItem_list(this);
  else
    return visitor->visitChildren(this);
}

JacyParser::Item_listContext* JacyParser::item_list() {
  Item_listContext *_localctx = _tracker.createInstance<Item_listContext>(_ctx, getState());
  enterRule(_localctx, 2, JacyParser::RuleItem_list);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(14);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while (_la == JacyParser::STRUCT) {
      setState(11);
      item();
      setState(16);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- ItemContext ------------------------------------------------------------------

JacyParser::ItemContext::ItemContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

JacyParser::StructContext* JacyParser::ItemContext::struct() {
  return getRuleContext<JacyParser::StructContext>(0);
}


size_t JacyParser::ItemContext::getRuleIndex() const {
  return JacyParser::RuleItem;
}


antlrcpp::Any JacyParser::ItemContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<JacyVisitor*>(visitor))
    return parserVisitor->visitItem(this);
  else
    return visitor->visitChildren(this);
}

JacyParser::ItemContext* JacyParser::item() {
  ItemContext *_localctx = _tracker.createInstance<ItemContext>(_ctx, getState());
  enterRule(_localctx, 4, JacyParser::RuleItem);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(17);
    struct();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- StructContext ------------------------------------------------------------------

JacyParser::StructContext::StructContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* JacyParser::StructContext::STRUCT() {
  return getToken(JacyParser::STRUCT, 0);
}

tree::TerminalNode* JacyParser::StructContext::IDENT() {
  return getToken(JacyParser::IDENT, 0);
}


size_t JacyParser::StructContext::getRuleIndex() const {
  return JacyParser::RuleStruct;
}


antlrcpp::Any JacyParser::StructContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<JacyVisitor*>(visitor))
    return parserVisitor->visitStruct(this);
  else
    return visitor->visitChildren(this);
}

JacyParser::StructContext* JacyParser::struct() {
  StructContext *_localctx = _tracker.createInstance<StructContext>(_ctx, getState());
  enterRule(_localctx, 6, JacyParser::RuleStruct);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(19);
    match(JacyParser::STRUCT);
    setState(20);
    match(JacyParser::IDENT);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

// Static vars and initialization.
std::vector<dfa::DFA> JacyParser::_decisionToDFA;
atn::PredictionContextCache JacyParser::_sharedContextCache;

// We own the ATN which in turn owns the ATN states.
atn::ATN JacyParser::_atn;
std::vector<uint16_t> JacyParser::_serializedATN;

std::vector<std::string> JacyParser::_ruleNames = {
  "party", "item_list", "item", "struct"
};

std::vector<std::string> JacyParser::_literalNames = {
};

std::vector<std::string> JacyParser::_symbolicNames = {
  "", "STRUCT", "IDENT"
};

dfa::Vocabulary JacyParser::_vocabulary(_literalNames, _symbolicNames);

std::vector<std::string> JacyParser::_tokenNames;

JacyParser::Initializer::Initializer() {
	for (size_t i = 0; i < _symbolicNames.size(); ++i) {
		std::string name = _vocabulary.getLiteralName(i);
		if (name.empty()) {
			name = _vocabulary.getSymbolicName(i);
		}

		if (name.empty()) {
			_tokenNames.push_back("<INVALID>");
		} else {
      _tokenNames.push_back(name);
    }
	}

  _serializedATN = {
    0x3, 0x608b, 0xa72a, 0x8133, 0xb9ed, 0x417c, 0x3be7, 0x7786, 0x5964, 
    0x3, 0x4, 0x19, 0x4, 0x2, 0x9, 0x2, 0x4, 0x3, 0x9, 0x3, 0x4, 0x4, 0x9, 
    0x4, 0x4, 0x5, 0x9, 0x5, 0x3, 0x2, 0x3, 0x2, 0x3, 0x2, 0x3, 0x3, 0x7, 
    0x3, 0xf, 0xa, 0x3, 0xc, 0x3, 0xe, 0x3, 0x12, 0xb, 0x3, 0x3, 0x4, 0x3, 
    0x4, 0x3, 0x5, 0x3, 0x5, 0x3, 0x5, 0x3, 0x5, 0x2, 0x2, 0x6, 0x2, 0x4, 
    0x6, 0x8, 0x2, 0x2, 0x2, 0x15, 0x2, 0xa, 0x3, 0x2, 0x2, 0x2, 0x4, 0x10, 
    0x3, 0x2, 0x2, 0x2, 0x6, 0x13, 0x3, 0x2, 0x2, 0x2, 0x8, 0x15, 0x3, 0x2, 
    0x2, 0x2, 0xa, 0xb, 0x5, 0x4, 0x3, 0x2, 0xb, 0xc, 0x7, 0x2, 0x2, 0x3, 
    0xc, 0x3, 0x3, 0x2, 0x2, 0x2, 0xd, 0xf, 0x5, 0x6, 0x4, 0x2, 0xe, 0xd, 
    0x3, 0x2, 0x2, 0x2, 0xf, 0x12, 0x3, 0x2, 0x2, 0x2, 0x10, 0xe, 0x3, 0x2, 
    0x2, 0x2, 0x10, 0x11, 0x3, 0x2, 0x2, 0x2, 0x11, 0x5, 0x3, 0x2, 0x2, 
    0x2, 0x12, 0x10, 0x3, 0x2, 0x2, 0x2, 0x13, 0x14, 0x5, 0x8, 0x5, 0x2, 
    0x14, 0x7, 0x3, 0x2, 0x2, 0x2, 0x15, 0x16, 0x7, 0x3, 0x2, 0x2, 0x16, 
    0x17, 0x7, 0x4, 0x2, 0x2, 0x17, 0x9, 0x3, 0x2, 0x2, 0x2, 0x3, 0x10, 
  };

  atn::ATNDeserializer deserializer;
  _atn = deserializer.deserialize(_serializedATN);

  size_t count = _atn.getNumberOfDecisions();
  _decisionToDFA.reserve(count);
  for (size_t i = 0; i < count; i++) { 
    _decisionToDFA.emplace_back(_atn.getDecisionState(i), i);
  }
}

JacyParser::Initializer JacyParser::_init;
