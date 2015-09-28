<?php

namespace Webnet\Bundle\SwissArmyBundle\DoctrineExtension;

use Doctrine\ORM\Query\AST\Functions\FunctionNode;
use Doctrine\ORM\Query\Lexer;

/**
 * Usage: IFNULL(expr1, expr2)
 *
 * If expr1 is not NULL, IFNULL() returns expr1; otherwise it returns expr2.
 * IFNULL() returns a numeric or string value, depending on the context in
 * which it is used.
 */
class IfNullFunction extends FunctionNode
{
    private $expr1;
    private $expr2;

    public function parse(\Doctrine\ORM\Query\Parser $parser)
    {
        $parser->match(Lexer::T_IDENTIFIER);
        $parser->match(Lexer::T_OPEN_PARENTHESIS);
        $this->expr1 = $parser->ArithmeticExpression();
        $parser->match(Lexer::T_COMMA);
        $this->expr2 = $parser->ArithmeticExpression();
        $parser->match(Lexer::T_CLOSE_PARENTHESIS);
    }

    public function getSql(\Doctrine\ORM\Query\SqlWalker $sqlWalker)
    {
        return 'IFNULL('
            .$sqlWalker->walkArithmeticPrimary($this->expr1) . ', '
            .$sqlWalker->walkArithmeticPrimary($this->expr2) . ')';
    }
}
