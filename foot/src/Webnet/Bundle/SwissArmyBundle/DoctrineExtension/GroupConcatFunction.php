<?php

namespace Webnet\Bundle\SwissArmyBundle\DoctrineExtension;

use Doctrine\ORM\Query\AST\Functions\FunctionNode;
use Doctrine\ORM\Query\Lexer;

/**
 * Usage: GroupConcat(expr1)
 */
class GroupConcatFunction extends FunctionNode
{
    private $expression = null;

    public function parse(\Doctrine\ORM\Query\Parser $parser)
    {
        $parser->match(Lexer::T_IDENTIFIER);
        $parser->match(Lexer::T_OPEN_PARENTHESIS);
        $this->expression = $parser->SingleValuedPathExpression();
        $parser->match(Lexer::T_CLOSE_PARENTHESIS);
    }

    public function getSql(\Doctrine\ORM\Query\SqlWalker $sqlWalker)
    {
        return "GROUP_CONCAT("
            . $this->expression->dispatch($sqlWalker)
            . " SEPARATOR ', ')";
    }
}
