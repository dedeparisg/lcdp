<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * appDevUrlMatcher.
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appDevUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    /**
     * Constructor.
     */
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($pathinfo)
    {
        $allow = array();
        $pathinfo = rawurldecode($pathinfo);
        $context = $this->context;
        $request = $this->request;

        if (0 === strpos($pathinfo, '/css/b833150')) {
            // _assetic_b833150
            if ($pathinfo === '/css/b833150.css') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => 'b833150',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_b833150',);
            }

            if (0 === strpos($pathinfo, '/css/b833150_jquery.fileupload')) {
                // _assetic_b833150_0
                if ($pathinfo === '/css/b833150_jquery.fileupload_1.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'b833150',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_b833150_0',);
                }

                // _assetic_b833150_1
                if ($pathinfo === '/css/b833150_jquery.fileupload-ui_2.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'b833150',  'pos' => 1,  '_format' => 'css',  '_route' => '_assetic_b833150_1',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/js')) {
            if (0 === strpos($pathinfo, '/js/baa730f')) {
                // _assetic_baa730f
                if ($pathinfo === '/js/baa730f.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'baa730f',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_baa730f',);
                }

                if (0 === strpos($pathinfo, '/js/baa730f_')) {
                    // _assetic_baa730f_0
                    if ($pathinfo === '/js/baa730f_tmpl.min_1.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'baa730f',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_baa730f_0',);
                    }

                    // _assetic_baa730f_1
                    if ($pathinfo === '/js/baa730f_load-image.min_2.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'baa730f',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_baa730f_1',);
                    }

                    // _assetic_baa730f_2
                    if ($pathinfo === '/js/baa730f_canvas-to-blob.min_3.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'baa730f',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_baa730f_2',);
                    }

                    if (0 === strpos($pathinfo, '/js/baa730f_jquery.fileupload')) {
                        // _assetic_baa730f_3
                        if ($pathinfo === '/js/baa730f_jquery.fileupload_4.js') {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'baa730f',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_baa730f_3',);
                        }

                        if (0 === strpos($pathinfo, '/js/baa730f_jquery.fileupload-')) {
                            // _assetic_baa730f_4
                            if ($pathinfo === '/js/baa730f_jquery.fileupload-process_5.js') {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'baa730f',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_baa730f_4',);
                            }

                            // _assetic_baa730f_5
                            if ($pathinfo === '/js/baa730f_jquery.fileupload-image_6.js') {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'baa730f',  'pos' => 5,  '_format' => 'js',  '_route' => '_assetic_baa730f_5',);
                            }

                            // _assetic_baa730f_6
                            if ($pathinfo === '/js/baa730f_jquery.fileupload-validate_7.js') {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'baa730f',  'pos' => 6,  '_format' => 'js',  '_route' => '_assetic_baa730f_6',);
                            }

                        }

                    }

                }

            }

            if (0 === strpos($pathinfo, '/js/2906314')) {
                // _assetic_2906314
                if ($pathinfo === '/js/2906314.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_2906314',);
                }

                if (0 === strpos($pathinfo, '/js/2906314_')) {
                    // _assetic_2906314_0
                    if ($pathinfo === '/js/2906314_jquery-1.10.2.min_1.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_2906314_0',);
                    }

                    // _assetic_2906314_1
                    if ($pathinfo === '/js/2906314_load-image.min_2.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_2906314_1',);
                    }

                    // _assetic_2906314_2
                    if ($pathinfo === '/js/2906314_canvas-to-blob.min_3.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_2906314_2',);
                    }

                    // _assetic_2906314_3
                    if ($pathinfo === '/js/2906314_tmpl.min_4.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_2906314_3',);
                    }

                    if (0 === strpos($pathinfo, '/js/2906314_jquery.')) {
                        // _assetic_2906314_4
                        if ($pathinfo === '/js/2906314_jquery.ui.widget_5.js') {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_2906314_4',);
                        }

                        // _assetic_2906314_5
                        if ($pathinfo === '/js/2906314_jquery.iframe-transport_6.js') {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 5,  '_format' => 'js',  '_route' => '_assetic_2906314_5',);
                        }

                        if (0 === strpos($pathinfo, '/js/2906314_jquery.fileupload')) {
                            // _assetic_2906314_6
                            if ($pathinfo === '/js/2906314_jquery.fileupload_7.js') {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 6,  '_format' => 'js',  '_route' => '_assetic_2906314_6',);
                            }

                            if (0 === strpos($pathinfo, '/js/2906314_jquery.fileupload-')) {
                                // _assetic_2906314_7
                                if ($pathinfo === '/js/2906314_jquery.fileupload-process_8.js') {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 7,  '_format' => 'js',  '_route' => '_assetic_2906314_7',);
                                }

                                // _assetic_2906314_8
                                if ($pathinfo === '/js/2906314_jquery.fileupload-image_9.js') {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 8,  '_format' => 'js',  '_route' => '_assetic_2906314_8',);
                                }

                                // _assetic_2906314_9
                                if ($pathinfo === '/js/2906314_jquery.fileupload-validate_10.js') {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 9,  '_format' => 'js',  '_route' => '_assetic_2906314_9',);
                                }

                                // _assetic_2906314_10
                                if ($pathinfo === '/js/2906314_jquery.fileupload-ui_11.js') {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 10,  '_format' => 'js',  '_route' => '_assetic_2906314_10',);
                                }

                            }

                        }

                    }

                    // _assetic_2906314_11
                    if ($pathinfo === '/js/2906314_galery_12.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 2906314,  'pos' => 11,  '_format' => 'js',  '_route' => '_assetic_2906314_11',);
                    }

                }

            }

        }

        if (0 === strpos($pathinfo, '/css')) {
            if (0 === strpos($pathinfo, '/css/456a500')) {
                // _assetic_456a500
                if ($pathinfo === '/css/456a500.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '456a500',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_456a500',);
                }

                if (0 === strpos($pathinfo, '/css/456a500_part_1_')) {
                    // _assetic_456a500_0
                    if ($pathinfo === '/css/456a500_part_1_bootstrap-3.0.3.min_1.css') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '456a500',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_456a500_0',);
                    }

                    if (0 === strpos($pathinfo, '/css/456a500_part_1_jquery.fileupload')) {
                        // _assetic_456a500_1
                        if ($pathinfo === '/css/456a500_part_1_jquery.fileupload-ui_2.css') {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '456a500',  'pos' => 1,  '_format' => 'css',  '_route' => '_assetic_456a500_1',);
                        }

                        // _assetic_456a500_2
                        if ($pathinfo === '/css/456a500_part_1_jquery.fileupload_3.css') {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '456a500',  'pos' => 2,  '_format' => 'css',  '_route' => '_assetic_456a500_2',);
                        }

                    }

                }

            }

            if (0 === strpos($pathinfo, '/css/9d2b0c5')) {
                // _assetic_9d2b0c5
                if ($pathinfo === '/css/9d2b0c5.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '9d2b0c5',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_9d2b0c5',);
                }

                // _assetic_9d2b0c5_0
                if ($pathinfo === '/css/9d2b0c5_orgchart_1.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '9d2b0c5',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_9d2b0c5_0',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/js/388636a')) {
            // _assetic_388636a
            if ($pathinfo === '/js/388636a.js') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '388636a',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_388636a',);
            }

            if (0 === strpos($pathinfo, '/js/388636a_')) {
                // _assetic_388636a_0
                if ($pathinfo === '/js/388636a_jquery-1.10.2.min_1.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '388636a',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_388636a_0',);
                }

                if (0 === strpos($pathinfo, '/js/388636a_part_2_google.')) {
                    // _assetic_388636a_1
                    if ($pathinfo === '/js/388636a_part_2_google.gviz-api_1.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '388636a',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_388636a_1',);
                    }

                    // _assetic_388636a_2
                    if ($pathinfo === '/js/388636a_part_2_google.jsapi_2.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '388636a',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_388636a_2',);
                    }

                    if (0 === strpos($pathinfo, '/js/388636a_part_2_google.uds.')) {
                        // _assetic_388636a_3
                        if ($pathinfo === '/js/388636a_part_2_google.uds.api.visu_3.js') {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '388636a',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_388636a_3',);
                        }

                        // _assetic_388636a_4
                        if ($pathinfo === '/js/388636a_part_2_google.uds.file.visu_4.js') {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '388636a',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_388636a_4',);
                        }

                    }

                }

            }

        }

        if (0 === strpos($pathinfo, '/css/cb41cba')) {
            // _assetic_cb41cba
            if ($pathinfo === '/css/cb41cba.css') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => 'cb41cba',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_cb41cba',);
            }

            // _assetic_cb41cba_0
            if ($pathinfo === '/css/cb41cba_part_1_style_1.css') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => 'cb41cba',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_cb41cba_0',);
            }

        }

        if (0 === strpos($pathinfo, '/js/9df7b75')) {
            // _assetic_9df7b75
            if ($pathinfo === '/js/9df7b75.js') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '9df7b75',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_9df7b75',);
            }

            // _assetic_9df7b75_0
            if ($pathinfo === '/js/9df7b75_jquery-1.10.2.min_1.js') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '9df7b75',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_9df7b75_0',);
            }

        }

        if (0 === strpos($pathinfo, '/css/cc8082a')) {
            // _assetic_cc8082a
            if ($pathinfo === '/css/cc8082a.css') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => 'cc8082a',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_cc8082a',);
            }

            if (0 === strpos($pathinfo, '/css/cc8082a_')) {
                // _assetic_cc8082a_0
                if ($pathinfo === '/css/cc8082a_bootstrap-3.0.3.min_1.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'cc8082a',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_cc8082a_0',);
                }

                // _assetic_cc8082a_1
                if ($pathinfo === '/css/cc8082a_glyphicons.min_2.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'cc8082a',  'pos' => 1,  '_format' => 'css',  '_route' => '_assetic_cc8082a_1',);
                }

                // _assetic_cc8082a_2
                if ($pathinfo === '/css/cc8082a_font-awesome.min_3.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'cc8082a',  'pos' => 2,  '_format' => 'css',  '_route' => '_assetic_cc8082a_2',);
                }

                // _assetic_cc8082a_3
                if ($pathinfo === '/css/cc8082a_theme_4.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'cc8082a',  'pos' => 3,  '_format' => 'css',  '_route' => '_assetic_cc8082a_3',);
                }

                // _assetic_cc8082a_4
                if ($pathinfo === '/css/cc8082a_custom_5.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'cc8082a',  'pos' => 4,  '_format' => 'css',  '_route' => '_assetic_cc8082a_4',);
                }

                // _assetic_cc8082a_5
                if ($pathinfo === '/css/cc8082a_pages_6.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'cc8082a',  'pos' => 5,  '_format' => 'css',  '_route' => '_assetic_cc8082a_5',);
                }

                // _assetic_cc8082a_6
                if ($pathinfo === '/css/cc8082a_redactor_7.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'cc8082a',  'pos' => 6,  '_format' => 'css',  '_route' => '_assetic_cc8082a_6',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/js/dfbf146')) {
            // _assetic_dfbf146
            if ($pathinfo === '/js/dfbf146.js') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => 'dfbf146',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_dfbf146',);
            }

            if (0 === strpos($pathinfo, '/js/dfbf146_')) {
                if (0 === strpos($pathinfo, '/js/dfbf146_jquery-')) {
                    // _assetic_dfbf146_0
                    if ($pathinfo === '/js/dfbf146_jquery-1.10.2.min_1.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'dfbf146',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_dfbf146_0',);
                    }

                    // _assetic_dfbf146_1
                    if ($pathinfo === '/js/dfbf146_jquery-ui-1.10.3.min_2.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'dfbf146',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_dfbf146_1',);
                    }

                }

                // _assetic_dfbf146_2
                if ($pathinfo === '/js/dfbf146_bootstrap-3.0.3.min_3.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'dfbf146',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_dfbf146_2',);
                }

                // _assetic_dfbf146_3
                if ($pathinfo === '/js/dfbf146_main_4.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'dfbf146',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_dfbf146_3',);
                }

                // _assetic_dfbf146_4
                if ($pathinfo === '/js/dfbf146_redactor_5.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'dfbf146',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_dfbf146_4',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/_')) {
            // _wdt
            if (0 === strpos($pathinfo, '/_wdt') && preg_match('#^/_wdt/(?P<token>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => '_wdt')), array (  '_controller' => 'web_profiler.controller.profiler:toolbarAction',));
            }

            if (0 === strpos($pathinfo, '/_profiler')) {
                // _profiler_home
                if (rtrim($pathinfo, '/') === '/_profiler') {
                    if (substr($pathinfo, -1) !== '/') {
                        return $this->redirect($pathinfo.'/', '_profiler_home');
                    }

                    return array (  '_controller' => 'web_profiler.controller.profiler:homeAction',  '_route' => '_profiler_home',);
                }

                if (0 === strpos($pathinfo, '/_profiler/search')) {
                    // _profiler_search
                    if ($pathinfo === '/_profiler/search') {
                        return array (  '_controller' => 'web_profiler.controller.profiler:searchAction',  '_route' => '_profiler_search',);
                    }

                    // _profiler_search_bar
                    if ($pathinfo === '/_profiler/search_bar') {
                        return array (  '_controller' => 'web_profiler.controller.profiler:searchBarAction',  '_route' => '_profiler_search_bar',);
                    }

                }

                // _profiler_purge
                if ($pathinfo === '/_profiler/purge') {
                    return array (  '_controller' => 'web_profiler.controller.profiler:purgeAction',  '_route' => '_profiler_purge',);
                }

                // _profiler_info
                if (0 === strpos($pathinfo, '/_profiler/info') && preg_match('#^/_profiler/info/(?P<about>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_info')), array (  '_controller' => 'web_profiler.controller.profiler:infoAction',));
                }

                // _profiler_phpinfo
                if ($pathinfo === '/_profiler/phpinfo') {
                    return array (  '_controller' => 'web_profiler.controller.profiler:phpinfoAction',  '_route' => '_profiler_phpinfo',);
                }

                // _profiler_search_results
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/search/results$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_search_results')), array (  '_controller' => 'web_profiler.controller.profiler:searchResultsAction',));
                }

                // _profiler
                if (preg_match('#^/_profiler/(?P<token>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler')), array (  '_controller' => 'web_profiler.controller.profiler:panelAction',));
                }

                // _profiler_router
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/router$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_router')), array (  '_controller' => 'web_profiler.controller.router:panelAction',));
                }

                // _profiler_exception
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/exception$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_exception')), array (  '_controller' => 'web_profiler.controller.exception:showAction',));
                }

                // _profiler_exception_css
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/exception\\.css$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_exception_css')), array (  '_controller' => 'web_profiler.controller.exception:cssAction',));
                }

            }

            if (0 === strpos($pathinfo, '/_configurator')) {
                // _configurator_home
                if (rtrim($pathinfo, '/') === '/_configurator') {
                    if (substr($pathinfo, -1) !== '/') {
                        return $this->redirect($pathinfo.'/', '_configurator_home');
                    }

                    return array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::checkAction',  '_route' => '_configurator_home',);
                }

                // _configurator_step
                if (0 === strpos($pathinfo, '/_configurator/step') && preg_match('#^/_configurator/step/(?P<index>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_configurator_step')), array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::stepAction',));
                }

                // _configurator_final
                if ($pathinfo === '/_configurator/final') {
                    return array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::finalAction',  '_route' => '_configurator_final',);
                }

            }

        }

        // homepage
        if (rtrim($pathinfo, '/') === '') {
            if (substr($pathinfo, -1) !== '/') {
                return $this->redirect($pathinfo.'/', 'homepage');
            }

            return array (  '_controller' => 'LcdpFrontBundle:Home:index',  '_route' => 'homepage',);
        }

        // contact_us
        if ($pathinfo === '/contact') {
            return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\ContactController::indexAction',  '_route' => 'contact_us',);
        }

        // all_events
        if ($pathinfo === '/evenements') {
            return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\EventsController::listAction',  '_route' => 'all_events',);
        }

        if (0 === strpos($pathinfo, '/le-club')) {
            // club_histoire
            if ($pathinfo === '/le-club/histoire') {
                return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\ClubController::staticPageAction',  'contentId' => 1,  '_route' => 'club_histoire',);
            }

            // club_organigramme
            if ($pathinfo === '/le-club/organigramme') {
                return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\ClubController::organigramAction',  '_route' => 'club_organigramme',);
            }

            // club_infos
            if ($pathinfo === '/le-club/infos') {
                return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\ClubController::staticPageAction',  'contentId' => 2,  '_route' => 'club_infos',);
            }

        }

        if (0 === strpos($pathinfo, '/danse')) {
            if (0 === strpos($pathinfo, '/danse/actualites')) {
                // danse_all_news
                if ($pathinfo === '/danse/actualites') {
                    return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::listAction',  'sectionId' => 21,  '_route' => 'danse_all_news',);
                }

                // danse_news
                if (preg_match('#^/danse/actualites/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'danse_news')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::showAction',  'sectionId' => 21,));
                }

            }

            if (0 === strpos($pathinfo, '/danse/soirees')) {
                // danse_all_soiree
                if ($pathinfo === '/danse/soirees') {
                    return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::listAction',  'sectionId' => 22,  '_route' => 'danse_all_soiree',);
                }

                // danse_soiree
                if (preg_match('#^/danse/soirees/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'danse_soiree')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::showAction',  'sectionId' => 22,));
                }

            }

            if (0 === strpos($pathinfo, '/danse/evenements')) {
                // danse_all_event
                if ($pathinfo === '/danse/evenements') {
                    return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\EventsController::listAction',  'sectionId' => 23,  '_route' => 'danse_all_event',);
                }

                // danse_event
                if (preg_match('#^/danse/evenements/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'danse_event')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\EventsController::showAction',  'sectionId' => 23,));
                }

            }

            // danse_cours
            if ($pathinfo === '/danse/cours') {
                return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\ClubController::staticPageAction',  'contentId' => 7,  '_route' => 'danse_cours',);
            }

            // danse_infos
            if ($pathinfo === '/danse/infos') {
                return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\ClubController::staticPageAction',  'contentId' => 7,  '_route' => 'danse_infos',);
            }

        }

        if (0 === strpos($pathinfo, '/football')) {
            if (0 === strpos($pathinfo, '/football/actualites')) {
                // foot_all_news
                if ($pathinfo === '/football/actualites') {
                    return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::listAction',  'sectionId' => 31,  '_route' => 'foot_all_news',);
                }

                // foot_news
                if (preg_match('#^/football/actualites/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'foot_news')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::showAction',  'sectionId' => 31,));
                }

            }

            if (0 === strpos($pathinfo, '/football/evenements')) {
                // foot_all_event
                if ($pathinfo === '/football/evenements') {
                    return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\EventsController::showAction',  'sectionId' => 33,  '_route' => 'foot_all_event',);
                }

                // foot_event
                if (preg_match('#^/football/evenements/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'foot_event')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\EventsController::showAction',  'sectionId' => 33,));
                }

            }

        }

        if (0 === strpos($pathinfo, '/a')) {
            if (0 === strpos($pathinfo, '/association')) {
                if (0 === strpos($pathinfo, '/association/soirees')) {
                    // assoc_all_soiree
                    if ($pathinfo === '/association/soirees') {
                        return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::listAction',  'sectionId' => 11,  '_route' => 'assoc_all_soiree',);
                    }

                    // assoc_soiree
                    if (preg_match('#^/association/soirees/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'assoc_soiree')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::showAction',  'sectionId' => 11,));
                    }

                }

                if (0 === strpos($pathinfo, '/association/evenements')) {
                    // assoc_all_event
                    if ($pathinfo === '/association/evenements') {
                        return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\EventsController::listAction',  'sectionId' =>   array (    0 => 11,    1 => 12,    2 => 13,  ),  '_route' => 'assoc_all_event',);
                    }

                    // assoc_event
                    if (preg_match('#^/association/evenements/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'assoc_event')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\EventsController::showAction',  'sectionId' =>   array (    0 => 11,    1 => 12,    2 => 13,  ),));
                    }

                }

                if (0 === strpos($pathinfo, '/association/sorties')) {
                    // assoc_all_sortie
                    if ($pathinfo === '/association/sorties') {
                        return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::listAction',  'sectionId' => 12,  '_route' => 'assoc_all_sortie',);
                    }

                    // assoc_sortie
                    if (preg_match('#^/association/sorties/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'assoc_sortie')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::showAction',  'sectionId' => 12,));
                    }

                }

                if (0 === strpos($pathinfo, '/association/voyages')) {
                    // assoc_all_voyage
                    if ($pathinfo === '/association/voyages') {
                        return array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::listAction',  'sectionId' => 13,  '_route' => 'assoc_all_voyage',);
                    }

                    // assoc_voyage
                    if (preg_match('#^/association/voyages/(?P<slug>[^/]++)$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'assoc_voyage')), array (  '_controller' => 'Lcdp\\FrontBundle\\Controller\\NewsController::showAction',  'sectionId' => 13,));
                    }

                }

            }

            if (0 === strpos($pathinfo, '/admin')) {
                // lcdp_admin_homepage
                if (rtrim($pathinfo, '/') === '/admin') {
                    if (substr($pathinfo, -1) !== '/') {
                        return $this->redirect($pathinfo.'/', 'lcdp_admin_homepage');
                    }

                    return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\AdminController::indexAction',  '_route' => 'lcdp_admin_homepage',);
                }

                if (0 === strpos($pathinfo, '/admin/log')) {
                    // logout
                    if ($pathinfo === '/admin/logout') {
                        return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\SecurityController::logoutAction',  '_route' => 'logout',);
                    }

                    if (0 === strpos($pathinfo, '/admin/login')) {
                        // login
                        if ($pathinfo === '/admin/login') {
                            return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\SecurityController::loginAction',  '_route' => 'login',);
                        }

                        // login_check
                        if ($pathinfo === '/admin/login_check') {
                            return array('_route' => 'login_check');
                        }

                    }

                }

                // lcdp_admin_profile_list
                if ($pathinfo === '/admin/profile/liste') {
                    return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\UserController::profileListAction',  '_route' => 'lcdp_admin_profile_list',);
                }

                // lcdp_admin_users
                if ($pathinfo === '/admin/utilisateurs') {
                    return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\UserController::userListAction',  '_route' => 'lcdp_admin_users',);
                }

                if (0 === strpos($pathinfo, '/admin/membres')) {
                    // lcdp_admin_members
                    if ($pathinfo === '/admin/membres') {
                        return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\MemberController::memberListAction',  '_route' => 'lcdp_admin_members',);
                    }

                    // lcdp_admin_member_edit
                    if (0 === strpos($pathinfo, '/admin/membres/edition') && preg_match('#^/admin/membres/edition(?:/(?P<id>\\d+))?$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'lcdp_admin_member_edit')), array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\MemberController::memberEditAction',  'id' => NULL,));
                    }

                }

                // lcdp_admin_newsletter
                if ($pathinfo === '/admin/newsletter') {
                    return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\NewsletterController::indexAction',  '_route' => 'lcdp_admin_newsletter',);
                }

                // lcdp_admin_parameters
                if ($pathinfo === '/admin/parametrages') {
                    return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\AdminController::configAction',  '_route' => 'lcdp_admin_parameters',);
                }

                // lcdp_admin_content_index
                if ($pathinfo === '/admin/contenu') {
                    return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::indexAction',  '_route' => 'lcdp_admin_content_index',);
                }

                if (0 === strpos($pathinfo, '/admin/page')) {
                    // lcdp_admin_page
                    if ($pathinfo === '/admin/pages') {
                        return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::pageListAction',  '_route' => 'lcdp_admin_page',);
                    }

                    // lcdp_admin_page_edit
                    if (0 === strpos($pathinfo, '/admin/page/edition') && preg_match('#^/admin/page/edition(?:/(?P<id>\\d+))?$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'lcdp_admin_page_edit')), array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::pageEditAction',  'id' => NULL,));
                    }

                }

                if (0 === strpos($pathinfo, '/admin/actualite')) {
                    // lcdp_admin_news
                    if ($pathinfo === '/admin/actualites') {
                        return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::newsListAction',  '_route' => 'lcdp_admin_news',);
                    }

                    // lcdp_admin_news_edit
                    if (0 === strpos($pathinfo, '/admin/actualite/edition') && preg_match('#^/admin/actualite/edition(?:/(?P<id>\\d+))?$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'lcdp_admin_news_edit')), array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::newsEditAction',  'id' => NULL,));
                    }

                }

                if (0 === strpos($pathinfo, '/admin/evenement')) {
                    // lcdp_admin_events
                    if ($pathinfo === '/admin/evenements') {
                        return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::eventsListAction',  '_route' => 'lcdp_admin_events',);
                    }

                    // lcdp_admin_event_edit
                    if (0 === strpos($pathinfo, '/admin/evenement/edition') && preg_match('#^/admin/evenement/edition(?:/(?P<id>\\d+))?$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'lcdp_admin_event_edit')), array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::eventsEditAction',  'id' => NULL,));
                    }

                }

                // lcdp_admin_content_soft_delete
                if (0 === strpos($pathinfo, '/admin/suppression') && preg_match('#^/admin/suppression/(?P<content>Page|News|Member|Event|Album)(?:/(?P<id>\\d+))?$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'lcdp_admin_content_soft_delete')), array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::softDeleteAction',  'id' => NULL,));
                }

                // lcdp_admin_content_publish_content
                if (0 === strpos($pathinfo, '/admin/publication') && preg_match('#^/admin/publication/(?P<status>0|1)/(?P<content>Page|News|Member|Event|Album)(?:/(?P<id>\\d+))?$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'lcdp_admin_content_publish_content')), array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::publishContentAction',  'id' => NULL,));
                }

                // lcdp_admin_videos
                if ($pathinfo === '/admin/videos') {
                    return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::videosListAction',  '_route' => 'lcdp_admin_videos',);
                }

                if (0 === strpos($pathinfo, '/admin/albums')) {
                    // lcdp_admin_albums
                    if ($pathinfo === '/admin/albums') {
                        return array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::albumsListAction',  '_route' => 'lcdp_admin_albums',);
                    }

                    if (0 === strpos($pathinfo, '/admin/albums/edition')) {
                        // lcdp_admin_album_edit
                        if (preg_match('#^/admin/albums/edition(?:/(?P<id>\\d+))?$#s', $pathinfo, $matches)) {
                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'lcdp_admin_album_edit')), array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::albumsEditAction',  'id' => NULL,));
                        }

                        // lcdp_admin_album_edita
                        if (0 === strpos($pathinfo, '/admin/albums/edition/test') && preg_match('#^/admin/albums/edition/test(?:/(?P<id>\\d+))?$#s', $pathinfo, $matches)) {
                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'lcdp_admin_album_edita')), array (  '_controller' => 'Lcdp\\AdminBundle\\Controller\\ContentController::aTestEditAction',  'id' => NULL,));
                        }

                    }

                }

            }

        }

        // _welcome
        if (rtrim($pathinfo, '/') === '') {
            if (substr($pathinfo, -1) !== '/') {
                return $this->redirect($pathinfo.'/', '_welcome');
            }

            return array (  '_controller' => 'Acme\\DemoBundle\\Controller\\WelcomeController::indexAction',  '_route' => '_welcome',);
        }

        if (0 === strpos($pathinfo, '/demo')) {
            if (0 === strpos($pathinfo, '/demo/secured')) {
                if (0 === strpos($pathinfo, '/demo/secured/log')) {
                    if (0 === strpos($pathinfo, '/demo/secured/login')) {
                        // _demo_login
                        if ($pathinfo === '/demo/secured/login') {
                            return array (  '_controller' => 'Acme\\DemoBundle\\Controller\\SecuredController::loginAction',  '_route' => '_demo_login',);
                        }

                        // _security_check
                        if ($pathinfo === '/demo/secured/login_check') {
                            return array (  '_controller' => 'Acme\\DemoBundle\\Controller\\SecuredController::securityCheckAction',  '_route' => '_security_check',);
                        }

                    }

                    // _demo_logout
                    if ($pathinfo === '/demo/secured/logout') {
                        return array (  '_controller' => 'Acme\\DemoBundle\\Controller\\SecuredController::logoutAction',  '_route' => '_demo_logout',);
                    }

                }

                if (0 === strpos($pathinfo, '/demo/secured/hello')) {
                    // acme_demo_secured_hello
                    if ($pathinfo === '/demo/secured/hello') {
                        return array (  'name' => 'World',  '_controller' => 'Acme\\DemoBundle\\Controller\\SecuredController::helloAction',  '_route' => 'acme_demo_secured_hello',);
                    }

                    // _demo_secured_hello
                    if (preg_match('#^/demo/secured/hello/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => '_demo_secured_hello')), array (  '_controller' => 'Acme\\DemoBundle\\Controller\\SecuredController::helloAction',));
                    }

                    // _demo_secured_hello_admin
                    if (0 === strpos($pathinfo, '/demo/secured/hello/admin') && preg_match('#^/demo/secured/hello/admin/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => '_demo_secured_hello_admin')), array (  '_controller' => 'Acme\\DemoBundle\\Controller\\SecuredController::helloadminAction',));
                    }

                }

            }

            // _demo
            if (rtrim($pathinfo, '/') === '/demo') {
                if (substr($pathinfo, -1) !== '/') {
                    return $this->redirect($pathinfo.'/', '_demo');
                }

                return array (  '_controller' => 'Acme\\DemoBundle\\Controller\\DemoController::indexAction',  '_route' => '_demo',);
            }

            // _demo_hello
            if (0 === strpos($pathinfo, '/demo/hello') && preg_match('#^/demo/hello/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => '_demo_hello')), array (  '_controller' => 'Acme\\DemoBundle\\Controller\\DemoController::helloAction',));
            }

            // _demo_contact
            if ($pathinfo === '/demo/contact') {
                return array (  '_controller' => 'Acme\\DemoBundle\\Controller\\DemoController::contactAction',  '_route' => '_demo_contact',);
            }

        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
