package net.csdn.ac.tasking.springboot.config;

import com.github.xiaoymin.knife4j.spring.annotations.EnableKnife4j;
import net.csdn.ac.tasking.springboot.CsdnTaskingSpringbootApplication;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Knife4j 配置
 *
 * @author lzpeng
 * @version 1.0
 * @date 2022/2/22 19:21
 */
@Configuration
@EnableKnife4j
@EnableSwagger2
@ConditionalOnMissingClass("org.junit.Test")
public class SwaggerConfiguration {

    @Value("${server.port:8080}")
    private int port;

    @Bean
    public Docket defaultApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(new ApiInfoBuilder()
                        .title("CSDN 训练营")
                        .description("CSDN 训练营 Java 项目 简历微服务")
                        .termsOfServiceUrl("http://localhost:" + port)
                        .contact(new Contact("lzpeng723", "http://localhost" + port, "lzpeng723@gmail.com"))
                        .version("1.0")
                        .build())
                //分组名称
                .groupName("简历")
                .select()
                //这里指定Controller扫描包路径
                .apis(RequestHandlerSelectors.basePackage(CsdnTaskingSpringbootApplication.class.getPackage().getName()))
                .paths(PathSelectors.any())
                .build();
    }
}
