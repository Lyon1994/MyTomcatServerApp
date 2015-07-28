package test;

import org.apache.catalina.startup.Bootstrap;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Bootstrap bootstrap = new Bootstrap();
		try {
			bootstrap.main(args);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
